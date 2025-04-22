{

  description = "";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem
      (system:
        let
          pkgs = import nixpkgs { inherit system; };
          nativeBuildInputs = with pkgs; [
            wasm-pack
            nodejs
          ];
        in
        with pkgs;
        {
          packages.default = buildNpmPackage {
            pname = "deep-freezer";
            version = "1.0.0";

            nativeBuildInputs = nativeBuildInputs;

            src = ./.;

            npmDepsHash = "sha256-aX5sIAfW+9d7pPg9FBjiiSGNjbKE2KoE97tKtKMXDKA=";

            npmBuild = ''
              npm run build
            '';
            installPhase = ''
              mkdir -p $out
              cp -r public/* $out
            '';
          };
        }
      );
}

