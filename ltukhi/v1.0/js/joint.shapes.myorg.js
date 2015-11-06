/*! JointJS v0.9.5 - JavaScript diagramming library  2015-09-10 


This Source Code Form is subject to the terms of the Mozilla Public
License, v. 2.0. If a copy of the MPL was not distributed with this
file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
//      JointJS library.
//      (c) 2011-2013 client IO

joint.shapes.myorg = {};

joint.shapes.myorg.Member = joint.dia.Element.extend({

    'markup': '<g class="rotatable"><g class="scalable"><rect class="card"/></g><text class="name"/></g>',

    'defaults': joint.util.deepSupplement({

        'type': 'myorg.Member',
        'size': { 'width': 180, 'height': 46 },
        'attrs': {

            'rect': { 'width': 170, 'height': 36 },

            '.card': {
                'fill': '#FFFFFF', 'stroke': '#000000', 'stroke-width': 2,
                'pointer-events': 'visiblePainted', 'rx': 10, 'ry': 10
            },

            '.name': {
                'font-weight': '800',
                'ref': '.card', 'ref-x': 0.5, 'ref-y': 0.35,
                'font-family': 'Courier New', 'font-size': 14,
                'text-anchor': 'middle'
            }
        }
    }, joint.dia.Element.prototype.defaults)
});

joint.shapes.myorg.Arrow = joint.dia.Link.extend({

    'defaults': {
        'type': 'myorg.Arrow',
        'source': { 'selector': '.card' }, 'target': { 'selector': '.card' },
        'attrs': { '.connection': { 'stroke': '#585858', 'stroke-width': 3 }},
        'z': -1
    }
});