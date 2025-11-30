'use strict';

// write code here
const items = document.querySelectorAll('.tree > li');

items.forEach(li => {
  const firstTextNode = li.childNodes[0];
  const span = document.createElement('span');
  span.textContent = firstTextNode.textContent;
  li.replaceChild(span, firstTextNode);

  const nextItems = li.querySelectorAll('ul > li');

nextItems.forEach(nextLi => {
  if (nextLi.querySelector('ul')) {
     const nestedFirstTextNode = nextLi.childNodes[0];
  const nestedSpan = document.createElement('span');
  nestedSpan.textContent = nestedFirstTextNode.textContent;
  nextLi.replaceChild(nestedSpan, nestedFirstTextNode);
  }

});

});

const spans = document.querySelectorAll('span');

spans.forEach(span => span.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  const nestedUl = li.querySelector(':scope > ul');
   if (!nestedUl) return;
    nestedUl.style.display = nestedUl.style.display === 'none'? 'block': 'none';

  }
  )
)
