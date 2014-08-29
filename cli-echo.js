var cliEcho = function cliEcho( echoLine, commandLineInterface ){
    if( ECHO_COMMAND_PATTERN.test( echoLine ) ){
        echoLine = echoLine.replace( ECHO_COMMAND_PATTERN, "" );
        echoLine = [ echoLine, "\r" ].join( "" );

        commandLineInterface.write( echoLine );
    }
};

const ECHO_COMMAND_PATTERN = /\@echo\:/;

module.exports = cliEcho;