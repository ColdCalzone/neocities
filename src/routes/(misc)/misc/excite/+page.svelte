<script lang="ts">
  import { onMount } from "svelte";
  
  onMount(() => {
    type Cell = {
      state : number;
      static?: boolean;
    }
    type Color = {
      r : number;
      g : number;
      b : number;
      a : number;
    };

    class Grid {
      private palette : Color[];

      private cells : Cell[][];
      private canvas : HTMLCanvasElement;
      private ctx : CanvasRenderingContext2D;

      private width : number;
      private height : number;

      constructor(palette : string[], canvas : HTMLCanvasElement) {
        this.palette = [];
        for(let color of palette) {
          let rgba_color : Color = {
            r: parseInt(color.substring(1, 3), 16),
            g: parseInt(color.substring(3, 5), 16),
            b: parseInt(color.substring(5, 7), 16),
            a: 0xFF
          }
          console.log(color.substring(1, 2));
          console.log(rgba_color);
          this.palette.push(rgba_color);
        }
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")!;
        this.cells = [];
        for(let y = 0; y < 50; y++) {
          this.cells.push([]);
          for(let x = 0; x < 50; x++) {
            let cell : Cell = {
              state: (Math.random() > 0.99) ? this.palette.length - 1 : 0,
            };
            if(cell.static) cell.state = 0;
            this.cells[y].push(cell)
          }
        }

        this.height = this.cells.length;
        this.width = this.cells[0].length;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.render();
      }

      getCellWrapping(x : number, y : number) {
        if (!this.cells) return undefined;
        return this.cells.at(y % this.cells.length)!.at(x % this.cells[0].length);
      }

      step() {
        this.cells = this.cells.map((row, y) => row.map((cell, x) => {
          if(cell.static) return cell;
          let new_cell : Cell = {
            state: cell.state,
          };

          if(cell.state > 0) {
            new_cell.state = cell.state - 1;
            if(cell.state > 2) return new_cell;
          }

          for(let offsetX of [-1, 1]) {
            if(this.getCellWrapping(x + offsetX, y)!.state == this.palette.length - 1) {
              new_cell.state = this.palette.length - 1;
              return new_cell
            }
          }

          for(let offsetY of [-1, 1]) {
            if(this.getCellWrapping(x, y + offsetY)!.state == this.palette.length - 1) {
              new_cell.state = this.palette.length - 1; 
              return new_cell
            }
          }

          if(Math.trunc(Math.random() * 10_000) == 69) {
            new_cell.state = this.palette.length - 1;
          }

          return new_cell;
        }))
      }

      render() {
        let data = new Uint8ClampedArray(4 * this.width * this.height);

        this.cells.flatMap((row, y) => {
          return row.flatMap((cell, x) => {
            console.log(cell.state);
            return this.palette[cell.state]
        })
        })
        .forEach((color, index) => {
          data[(index * 4)] = color.r;
          data[(index * 4) + 1] = color.g;
          data[(index * 4) + 2] = color.b;
          data[(index * 4) + 3] = color.a;
        });

        this.ctx.putImageData(new ImageData(data, this.width, this.height), 0, 0);
      }
    }

    const PALETTE = [
      "#030516",
      "#2A4347",
      "#218278",
      "#18C0A9",
      "#0FFFDB"
    ];

    let grid = new Grid(PALETTE, <HTMLCanvasElement>document.getElementById("excite-canvas")!);

    
    setInterval(() => {
      grid.step()
      grid.render();
    }, 1 / 24);
  });
</script>

<style>
  canvas {
    image-rendering: pixelated;
  }

  #excite-canvas {
    width: 300px;
    height: 100%;
  }
</style>

<canvas id="excite-canvas">
  This page requires Javascript to render. Sorry.
</canvas>
