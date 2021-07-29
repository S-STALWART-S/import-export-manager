# Manage your data with this package!

This package help you to manage your everything need to get export and import like modules,components,functions,and ...

## How to install:

`yarn add @s_stalwart_s/import-export-manager`
**or**
`npm install @s_stalwart_s/import-export-manager`

## Intellisense:

` yarn add types @s_stalwart_s/import-export-manager`
**or**
`npm install types @s_stalwart_s/import-export-manager`

## How to use:

**Before** I explain how this works, please check this sample:
[use-import-sample-master](https://github.com/S-STALWART-S/use-import-sample-master)
`git clone https://github.com/S-STALWART-S/use-import-sample-master.git`

Imagine you have some files for your functions.
on the first file with normal export you probably doing this:
`export {function1,function2, ...}`
And in the second file, you will probably **repeat** the same thing.
To integrate these functions into one path you should doing **nasty** job, but using with this little code I made, You set yourself **free!**

From this module you have two item to use. **exporter as _function_** and **imports as _object_**

**exporter** function accept **two** argument. first arg is object key path. you can pass it as **array** or **string**. second arg is your data as **object**.

#### How to use exporter:

`exporter("scripts.functions.utilsFunctions",{function1,function2})`
**or**
`exporter(["scripts","functions","utilsFunctions"],{function1,function2})`

#### What is imports object:

Your data set into imports object. so you can use it anywhere and without any concern.
The output of exporter i wrote above is objects with keys i set. Then i have access my functions (function1,function2) with parent key named as scripts.

If you want access to function1 use your javascript skill ;)
For example:
`const { function1, function2 } = imports.scripts.functions.utilsFunctions`

## Finally step:

You have to **import** your files to your project. Best place is root file of your project and if you using react, i think best place is **index.js** file in **src** folder. Be sure to check the sample project i made
