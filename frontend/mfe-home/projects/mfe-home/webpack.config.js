const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, '../../tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  output: {
    uniqueName: "mfeHome",
    publicPath: "auto"
  },
  optimization: {
    runtimeChunk: false
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    }
  },
  plugins: [
    new ModuleFederationPlugin({


      //exporta os modulos para o shell (exportar qualquer arquivo)

      name: "mfeHome",
      filename: "remoteEntry.js",
      exposes: {
        './HomeModule': 'projects/mfe-home/src/app/home/home.module.ts',
        './DadosCadastroModule': 'projects/mfe-home/src/app/dados-cadastro/dados-cadastro.module.ts',
        './UploadSelfieModule': 'projects/mfe-home/src/app/upload-selfie/upload-selfie.module.ts',
        './SelectPlanModule': 'projects/mfe-home/src/app/select-plan/select-plan.module.ts'
      },

      // remotes: {
      //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

      // },


      //EXPORTA AS LIBS NECESSARIAS

      shared: share({
        "@angular/core": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/common/http": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/router": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        "@angular/material": { singleton: true, strictVersion: true, requiredVersion: 'auto' },
        ...sharedMappings.getDescriptors()
      })

    }),
    sharedMappings.getPlugin()
  ],
};
