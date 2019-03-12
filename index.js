let mix=require('laravel-mix');

class Tailwind{
    dependencies(){
        this.requireReload=`
            Tailwind has now benn installed. Please ensure 
            that your tailwind.js configuration file (node_modules/.bin/tailwind init)
            has been created, and run "npm run dev" again.
        `;
        return ['tailwindcss'];
    }
 register(configPath='./tailwind.js'){
     this.configPath=configPath;
 }

 boot(){
    if(mix.components.has('sass')){
        Config.processCssUrl=false;
    }
    let tailwindcss=require('tailwindcss');
    Config.postCss.push(tailwindcss(this.configPath));
 }
}
mix.extend('tailwind',new Tailwind());