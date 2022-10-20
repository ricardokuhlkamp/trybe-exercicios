const { sum } = require('./sum');
const { myRemove } = require('./exercicio2');
const { myFizzBuzz } = require('./exercicio3');
const { encode, decode } = require('./exercicio4');
const { techList } = require('./techList.js');

describe('A função sum(a, b) retorna a soma do parâmetro a com o b', () => {
  test('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(sum(4, 5)).toBe(9);
  })
  test('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(sum(0, 0)).toBe(0);
  })
  test('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"(string 5)', () => {
    expect(() => {sum(4, '5')}).toThrow();
  })
  test('Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () => {
    expect(() => {sum(4, '5')}).toThrowError(new Error('parameters must be numbers'));
  })
})

describe('A função myRemove(arr, item) recebe um array arr e retorna uma cópia desse array sem o elemento item caso ele exista no array', () => {
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect([ 1, 2, 4 ]).toEqual(myRemove(arr, 3))
  })
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    const arr = [1, 2, 3, 4];
    expect([ 1, 2, 3, 4]).not.toEqual(myRemove(arr, 3))
  })
  test('Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    const arr = [1, 2, 3, 4];
    expect([ 1, 2, 3, 4 ]).toEqual(myRemove(arr, 5))
  })
})

describe('A função myFizzBuzz(num) recebe um número num e retorna "fizzbuzz" se o número for divisível por 3 e 5, retorna "fizz" se for divisível apenas por 3, retorna "buzz" se divisível apenas por 5, retorna o próprio número caso não seja divisível por 3 ou 5 e retorna false caso num não seja um número', () => {
  test('Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz')
  })
  test('Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(9)).toBe('fizz')
  })
  test('Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(10)).toBe('buzz')
  })
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toBe(7)
  })
  test('Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz(7)).toBe(7)
  })
  test('Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
    expect(myFizzBuzz('xablau')).toBe(false)
  })
})

describe('Teste as as funções encode e decode', () => {
  test('a função encode é definida', () => {
    expect(encode).toBeDefined();
  });
  test('a função decode é definida', () => {
    expect(decode).toBeDefined();
  });
  test('Teste se encode é uma função', () => {
    expect(typeof encode).toBe('function');
  });
  test('Teste se decode é uma função', () => {
    expect(typeof decode).toBe('function');
  });
  test('Para a função encode, teste se a vogal a é convertida em 1;', () => {
    expect(encode('a')).toBe('1');
  });
  test('ara a função encode, teste se e vogal e é convertida em 2;', () => {
    expect(encode('e')).toBe('2');
  });
  test('ara a função encode, teste se i vogal i é convertida em 3;', () => {
    expect(encode('i')).toBe('3');
  });
  test('ara a função encode, teste se a vogal o é convertida em 4;', () => {
    expect(encode('o')).toBe('4');
  });
  test('ara a função encode, teste se a vogal u é convertida em 5;', () => {
    expect(encode('u')).toBe('5');
  });
  test('Para a função decode, teste se o número 1 é convertida na vogal a;', () => {
    expect(decode('1')).toBe('a');
  });
  test('Para a função decode, teste se o número 2 é convertida na vogal e;;', () => {
    expect(decode('2')).toBe('e');
  });
  test('Para a função decode, teste se o número 3 é convertida na vogal i;', () => {
    expect(decode('3')).toBe('i');
  });
  test('Para a função decode, teste se o número 4 é convertida na vogal o;', () => {
    expect(decode('4')).toBe('o');
  });
  test('Para a função decode, teste se o número 5 é convertida na vogal u;', () => {
    expect(decode('5')).toBe('u');
  });
  test('Para a função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  test('Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('abacaxi')).toBe('1b1c1x3');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('1b1c1x3')).toBe('abacaxi');
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(encode('abacaxi').length).toEqual(('1b1c1x3').length);
  });
  test('Teste se as demais letras/números não são convertidos para cada caso', () => {
    expect(decode('1b1c1x3').length).toEqual(('abacaxi').length);
  });
})

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

const hydrate = require('./hydrate.js');

describe('Testa a função hydrate', () => {
  it('Testa se a função hydrate é definida', () => {
    expect(hydrate).toBeDefined();
  });
  it('Testa se hydrate é uma função', () => {
    expect(typeof hydrate).toBe('function');
  });
  it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});