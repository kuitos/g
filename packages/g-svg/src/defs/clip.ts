/**
 * @fileoverview clip
 * @author dengfuping_develop@163.com
 */

import { uniqueId } from '@antv/util';

class Clip {
  type: string = 'clip';
  id: string;
  el: SVGClipPathElement;
  cfg: {
    [key: string]: any;
  } = {};

  constructor(cfg) {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
    this.el = el;
    this.id = uniqueId('clip_');
    el.id = this.id;
    const shapeEl = cfg.cfg.el;
    el.appendChild(shapeEl);
    this.cfg = cfg;
    return this;
  }

  match() {
    return false;
  }

  remove() {
    const el = this.el;
    el.parentNode.removeChild(el);
  }
}

export default Clip;
