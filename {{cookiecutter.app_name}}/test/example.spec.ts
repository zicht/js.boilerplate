import {Example} from '../src/example';

describe('Example', ():void => {
    let onDebug:jasmine.Spy;
    let example:Example;

    beforeEach(():void => {
        onDebug = spyOn(window.console, 'debug');
        example = new Example();
    });

    it('should log a message to the console', ():void => {
        expect(onDebug).toHaveBeenCalledTimes(0);
        example.sayHello();
        expect(onDebug).toHaveBeenCalledTimes(1);
    });
});
