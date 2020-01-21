import $ from 'jquery';

const moveElementTo = function ($el, $to) {
  if ($to.find($el).length < 1 && $el.length > 0) {
    $el.appendTo($to);
  }
}

export default moveElementTo;