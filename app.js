const chalk = require('chalk')
const yargs =require('yargs')

yargs.version('1.1.0')
// Create add command
yargs.command({
    command:'add',
    describe: 'Add a note!',
    builder:{
        body:{
            describe : 'Note Body',
            demandOption:true,
            type:'string'
        },
        title:{
            describe: 'Note Title',
            demandOption:true,
            type:'string'
        }

    },
    handler: function(argv){
        console.log('Title: ',argv.title)
        console.log('The Body : ',argv.body)
        
    }

})
//Create remove command

yargs.command({
    command:'remove',
    describe: 'Remove a note!',
    handler: function(){
        console.log('Removing a note!')
    }

})

//Create List command

yargs.command({
    command:'list',
    describe: 'List the notes!',
    handler: function(){
        console.log('Listing the notes!')
    }

})

//Create Read command

yargs.command({
    command:'read',
    describe: 'Read the notes!',
    handler: function(){
        console.log('Reading the notes!')
    }

})

yargs.parse()


//console.log(yargs.argv)

