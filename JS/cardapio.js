function criarEntradas(plus, minus, num, valor) {
  let value = valor;

  plus.addEventListener('click', () => {
      value++;
      value = value < 10 ? '0' + value : value;
      num.textContent = value;
  });

  minus.addEventListener('click', () => {
      if (value > 1) {
          value--;
          value = value < 10 ? '0' + value : value;
          num.textContent = value;
      }
  });
}

criarEntradas(
  document.querySelector('.plusA'),
  document.querySelector('.minusA'),
  document.querySelector('.numA'),
  1
);

criarEntradas(
  document.querySelector('.plusB'),
  document.querySelector('.minusB'),
  document.querySelector('.numB'),
  1
);

criarEntradas(
  document.querySelector('.plusC'),
  document.querySelector('.minusC'),
  document.querySelector('.numC'),
  1
);

criarEntradas(
  document.querySelector('.plusD'),
  document.querySelector('.minusD'),
  document.querySelector('.numD'),
  1
);

criarEntradas(
  document.querySelector('.plusE'),
  document.querySelector('.minusE'),
  document.querySelector('.numE'),
  1
);

criarEntradas(
  document.querySelector('.plusF'),
  document.querySelector('.minusF'),
  document.querySelector('.numF'),
  1
);

criarEntradas(
  document.querySelector('.plusG'),
  document.querySelector('.minusG'),
  document.querySelector('.numG'),
  1
);

criarEntradas(
  document.querySelector('.plusH'),
  document.querySelector('.minusH'),
  document.querySelector('.numH'),
  1
);

criarEntradas(
  document.querySelector('.plusI'),
  document.querySelector('.minusI'),
  document.querySelector('.numI'),
  1
);

criarEntradas(
  document.querySelector('.plusJ'),
  document.querySelector('.minusJ'),
  document.querySelector('.numJ'),
  1
);

criarEntradas(
  document.querySelector('.plusK'),
  document.querySelector('.minusK'),
  document.querySelector('.numK'),
  1
);

criarEntradas(
  document.querySelector('.plusL'),
  document.querySelector('.minusL'),
  document.querySelector('.numL'),
  1
);

/*filtro de comida*/
function filterItems() {
  // Obtém o termo de busca
  const filterValue = document.getElementById('filter-input').value.toLowerCase();

  // Seleciona todos os itens do cardápio
  const items = document.querySelectorAll('.flex-container .item1, .flex-container .item2');

  // Itera sobre os itens e filtra
  items.forEach(item => {
      const itemText = item.innerText.toLowerCase(); // Texto do item
      if (itemText.includes(filterValue)) {
          item.style.display = ""; // Mostra o item
      } else {
          item.style.display = "none"; // Esconde o item
      }
  });
}