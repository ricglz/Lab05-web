(() => {
  const itemInput = document.getElementById('item-input');
  const resultsUl = document.getElementById('results-ul');
  const getItemFromEvent = ({ target }) => target.parentNode.parentNode;

  function getItemNode(value) {
    const li = document.createElement('li');
    li.className = 'item'
    li.innerHTML = `
      <p>${value}</p>
      <div>
        <button id="check-btn" class="check-btn">Check</button>
        <button id="delete-btn" class="delete-btn">Delete</button>
      </div>
     `
    return li;
  };

  function checkItem(event) {
    event.preventDefault();
    const item = getItemFromEvent(event);
    const paragraph = item.getElementsByTagName('p')[0];
    if(paragraph.classList.contains('td-lt')) {
      paragraph.classList.remove('td-lt')
    } else {
      paragraph.classList.add('td-lt')
    }
  }

  function deleteItem(event) {
    event.preventDefault();
    getItemFromEvent(event).remove();
  }

  function addItem(value) {
    console.log('Adding item');
    const itemNode = getItemNode(value);
    itemNode.querySelector('button#check-btn')
      .addEventListener('click', checkItem);
    itemNode.querySelector('button#delete-btn')
      .addEventListener('click', deleteItem);
    resultsUl.appendChild(itemNode);
  }

  function init() {
    document.getElementById('submit-btn').addEventListener('click', function(e) {
      e.preventDefault();
      const { value } = itemInput;
      if(value != '') {
        addItem(value)
      } else {
        console.log('The user tried to add something empty');
      }
    });
  }

  init();
})();
