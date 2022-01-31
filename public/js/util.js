

const PositionMarkup = {
    BEFORE_BEGIN: 'beforebegin',
    AFTER_BEGIN: 'afterbegin',
    BEFORE_END: 'beforeend',
    AFTER_END: 'afterend',
};

const createNodeElement = (markup) => {
  const createElement = document.createElement('div');
  createElement.insertAdjacentHTML('beforeend', markup);
  const element = createElement.firstElementChild;
  createElement.remove();

  return element;
};

const renderNodeElement = (container, position, element) => {
    switch (position) {
      case 'beforebegin': return container.before(element);
      case 'afterbegin': return container.prepend(element);
      case 'beforeend': return container.append(element);
      case 'afterend': return container.after(element);
      default : throw new Error('Передайте валидное значение!');
    }
  };
  
  const replaceNodeElementWithoutParent = (newChildElement, oldChildElement) => {
    container.replaceWith(getNodeElement(newChildElement));
  };

export {PositionMarkup, createNodeElement, renderNodeElement, replaceNodeElementWithoutParent};
