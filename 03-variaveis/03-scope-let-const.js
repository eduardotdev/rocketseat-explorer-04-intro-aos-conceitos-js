// const e let são locais e só funcionam no escopo onde foi criada

console.log('> existe y antes do bloco? ', y)

{
  console.log('> existe y antes? ', y)
  let y = 0
  console.log('> existe y depois? ', y)
}

console.log('> existe y depois do bloco? ', y)