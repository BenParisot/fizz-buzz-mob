const test = QUnit.test;

function fizzBuzz(integer) {
    let result = '';

    if(integer % 3 === 0 && integer % 5 === 0) {
        result = 'fizzbuzz';
    }
    else if(integer % 3 === 0) {
        result = 'fizz';
    }
    else if(integer % 5 === 0) {
        result = 'buzz';
    }
    else {
        result = integer;
    }   

    return result;
}


test('return fizz if divisible by 3', function(assert) {
    const integer = 3;
    const expect = 'fizz';
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});

test('return buzz if divisible by 5', function(assert) {
    const integer = 5;
    const expect = 'buzz';
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});

test('return fizzbuzz if divisible by 5 and 3', function(assert) {
    const integer = 15;
    const expect = 'fizzbuzz';
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});
test('return integer if not divisible by 3 or 5', function(assert) {
    const integer = 7;
    const expect = integer;
    const result = fizzBuzz(integer);

    assert.equal(result, expect);
});