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

      private cells : Cell[];
      private canvas : HTMLCanvasElement;
      private ctx : CanvasRenderingContext2D;

      private width : number;
      private height : number;

      constructor(palette : string[], canvas : HTMLCanvasElement, w : number = 100, h : number = 100) {
        this.palette = [];
        this.setPalette(palette);

        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d")!;
        this.cells = Array.from({ length: w * h}, (v, i) => {
          let cell : Cell = {
            state: (Math.random() > 0.99) ? this.palette.length - 1 : 0,
          };
          if(cell.static) cell.state = 0;

          return cell;
        });
        

        this.height = h;
        this.width = w;

        this.canvas.width = this.width;
        this.canvas.height = this.height;

        this.render();
      }

      setPalette(palette : string[]) {
        this.palette = [];
        for(let color of palette) {
          let rgba_color : Color = {
            r: parseInt(color.substring(1, 3), 16),
            g: parseInt(color.substring(3, 5), 16),
            b: parseInt(color.substring(5, 7), 16),
            a: 0xFF
          }
          this.palette.push(rgba_color);
        }
      }

      getCellWrapping(x : number, y : number) {
        if (!this.cells) return undefined;

        y %= this.height;
        x %= this.width;

        if(y < 0) y = this.height + y;

        if(x < 0) x = this.width + x;

        return this.cells[this.width * y + x];
      }

      step() {
        this.cells = this.cells.map( (cell, i, grid) => {
          if(cell.static) return cell;
          let new_cell : Cell = {
            state: cell.state,
          };

          let x = i % this.width;
          let y = (i - x) / this.width;


          if(cell.state > 0) {
            new_cell.state = cell.state - 1;
            return new_cell;
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
        });
      }

      render() {
        let data = new Uint8ClampedArray(4 * this.width * this.height);

        this.cells.map((cell, i) => {
            return this.palette[cell.state];
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

    const PALETTES = [
      [
        "#030516",
        "#2A4347",
        "#218278",
        "#18C0A9",
        "#0FFFDB"
      ],
      [
        "#05252A",
        "#431F32",
        "#821A3A",
        "#c01442",
        "#FF0F4B"
      ],
      [
        "#4F1A4D",
        "#432360",
        "#372C73",
        "#2B3686",
        "#1F3F99",
        "#1449AC",
      ],
      [
        "#000009",
        "#4B00FF",
        "#09DFFF",
        "#4BFF09",
        "#DFFB00",
        "#FFB409",
        "#FF0F4B",
      ]
    ];

    let palette_index = (parseInt(new URL(window.location.href).searchParams.get("palette")!) % PALETTES.length) || 0;
    let grid = new Grid(PALETTES[palette_index], <HTMLCanvasElement>document.getElementById("excite-canvas")!);

    document.getElementById("excite-canvas")!.onclick = () => {
      palette_index += 1;
      palette_index %= PALETTES.length;
      grid.setPalette(PALETTES[palette_index])
    }
    
    setInterval(() => {
      grid.step()
      grid.render();
    }, 1000 / 60);
  });
</script>

<style>
  canvas {
    image-rendering: pixelated;
  }

  #excite-canvas {
    width: 100%;
    height: 100%;
  }
</style>

<canvas id="excite-canvas">
  This page requires Javascript to render. Sorry.
</canvas>
