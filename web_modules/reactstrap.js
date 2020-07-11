import { c as createCommonjsModule, r as react } from './common/index-3e0c732a.js';
import { p as propTypes$d } from './common/index-61aab6fb.js';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
});

var globalCssModule;
function mapToCssModules(className, cssModule) {
  if (className === void 0) {
    className = '';
  }

  if (cssModule === void 0) {
    cssModule = globalCssModule;
  }

  if (!cssModule) return className;
  return className.split(' ').map(function (c) {
    return cssModule[c] || c;
  }).join(' ');
}
var warned = {};
function warnOnce(message) {
  if (!warned[message]) {
    /* istanbul ignore else */
    if (typeof console !== 'undefined') {
      console.error(message); // eslint-disable-line no-console
    }

    warned[message] = true;
  }
}

var Element = typeof window === 'object' && window.Element || function () {};

function DOMElement(props, propName, componentName) {
  if (!(props[propName] instanceof Element)) {
    return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Expected prop to be an instance of Element. Validation failed.');
  }
}
var targetPropType = propTypes$d.oneOfType([propTypes$d.string, propTypes$d.func, DOMElement, propTypes$d.shape({
  current: propTypes$d.any
})]);
var tagPropType = propTypes$d.oneOfType([propTypes$d.func, propTypes$d.string, propTypes$d.shape({
  $$typeof: propTypes$d.symbol,
  render: propTypes$d.func
}), propTypes$d.arrayOf(propTypes$d.oneOfType([propTypes$d.func, propTypes$d.string, propTypes$d.shape({
  $$typeof: propTypes$d.symbol,
  render: propTypes$d.func
})]))]);
function isObject(value) {
  var type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

var propTypes = {
  tag: tagPropType,
  fluid: propTypes$d.oneOfType([propTypes$d.bool, propTypes$d.string]),
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps = {
  tag: 'div'
};

var Container = function Container(props) {
  var className = props.className,
      cssModule = props.cssModule,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "fluid", "tag"]);

  var containerClass = 'container';

  if (fluid === true) {
    containerClass = 'container-fluid';
  } else if (fluid) {
    containerClass = "container-" + fluid;
  }

  var classes = mapToCssModules(classnames(className, containerClass), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Container.propTypes = propTypes;
Container.defaultProps = defaultProps;

var rowColWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var rowColsPropType = propTypes$d.oneOfType([propTypes$d.number, propTypes$d.string]);
var propTypes$1 = {
  tag: tagPropType,
  noGutters: propTypes$d.bool,
  className: propTypes$d.string,
  cssModule: propTypes$d.object,
  form: propTypes$d.bool,
  xs: rowColsPropType,
  sm: rowColsPropType,
  md: rowColsPropType,
  lg: rowColsPropType,
  xl: rowColsPropType
};
var defaultProps$1 = {
  tag: 'div',
  widths: rowColWidths
};

var Row = function Row(props) {
  var className = props.className,
      cssModule = props.cssModule,
      noGutters = props.noGutters,
      Tag = props.tag,
      form = props.form,
      widths = props.widths,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "noGutters", "tag", "form", "widths"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var colSize = props[colWidth];
    delete attributes[colWidth];

    if (!colSize) {
      return;
    }

    var isXs = !i;
    colClasses.push(isXs ? "row-cols-" + colSize : "row-cols-" + colWidth + "-" + colSize);
  });
  var classes = mapToCssModules(classnames(className, noGutters ? 'no-gutters' : null, form ? 'form-row' : 'row', colClasses), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Row.propTypes = propTypes$1;
Row.defaultProps = defaultProps$1;

var colWidths = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp = propTypes$d.oneOfType([propTypes$d.number, propTypes$d.string]);
var columnProps = propTypes$d.oneOfType([propTypes$d.bool, propTypes$d.number, propTypes$d.string, propTypes$d.shape({
  size: propTypes$d.oneOfType([propTypes$d.bool, propTypes$d.number, propTypes$d.string]),
  order: stringOrNumberProp,
  offset: stringOrNumberProp
})]);
var propTypes$2 = {
  tag: tagPropType,
  xs: columnProps,
  sm: columnProps,
  md: columnProps,
  lg: columnProps,
  xl: columnProps,
  className: propTypes$d.string,
  cssModule: propTypes$d.object,
  widths: propTypes$d.array
};
var defaultProps$2 = {
  tag: 'div',
  widths: colWidths
};

var getColumnSizeClass = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Col = function Col(props) {
  var className = props.className,
      cssModule = props.cssModule,
      widths = props.widths,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "widths", "tag"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      var colClass = getColumnSizeClass(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames)), cssModule));
    } else {
      var _colClass = getColumnSizeClass(isXs, colWidth, columnProp);

      colClasses.push(_colClass);
    }
  });

  if (!colClasses.length) {
    colClasses.push('col');
  }

  var classes = mapToCssModules(classnames(className, colClasses), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Col.propTypes = propTypes$2;
Col.defaultProps = defaultProps$2;

var propTypes$3 = {
  light: propTypes$d.bool,
  dark: propTypes$d.bool,
  full: propTypes$d.bool,
  fixed: propTypes$d.string,
  sticky: propTypes$d.string,
  color: propTypes$d.string,
  role: propTypes$d.string,
  tag: tagPropType,
  className: propTypes$d.string,
  cssModule: propTypes$d.object,
  expand: propTypes$d.oneOfType([propTypes$d.bool, propTypes$d.string])
};
var defaultProps$3 = {
  tag: 'nav',
  expand: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  } else if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-" + expand;
};

var Navbar = function Navbar(props) {
  var _classNames;

  var expand = props.expand,
      className = props.className,
      cssModule = props.cssModule,
      light = props.light,
      dark = props.dark,
      fixed = props.fixed,
      sticky = props.sticky,
      color = props.color,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "tag"]);

  var classes = mapToCssModules(classnames(className, 'navbar', getExpandClass(expand), (_classNames = {
    'navbar-light': light,
    'navbar-dark': dark
  }, _classNames["bg-" + color] = color, _classNames["fixed-" + fixed] = fixed, _classNames["sticky-" + sticky] = sticky, _classNames)), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Navbar.propTypes = propTypes$3;
Navbar.defaultProps = defaultProps$3;

var propTypes$4 = {
  tag: tagPropType,
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$4 = {
  tag: 'a'
};

var NavbarBrand = function NavbarBrand(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'navbar-brand'), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

NavbarBrand.propTypes = propTypes$4;
NavbarBrand.defaultProps = defaultProps$4;

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var propTypes$5 = {
  active: propTypes$d.bool,
  'aria-label': propTypes$d.string,
  block: propTypes$d.bool,
  color: propTypes$d.string,
  disabled: propTypes$d.bool,
  outline: propTypes$d.bool,
  tag: tagPropType,
  innerRef: propTypes$d.oneOfType([propTypes$d.object, propTypes$d.func, propTypes$d.string]),
  onClick: propTypes$d.func,
  size: propTypes$d.string,
  children: propTypes$d.node,
  className: propTypes$d.string,
  cssModule: propTypes$d.object,
  close: propTypes$d.bool
};
var defaultProps$5 = {
  color: 'secondary',
  tag: 'button'
};

var Button =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Button, _React$Component);

  function Button(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.onClick = _this.onClick.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Button.prototype;

  _proto.onClick = function onClick(e) {
    if (this.props.disabled) {
      e.preventDefault();
      return;
    }

    if (this.props.onClick) {
      this.props.onClick(e);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        active = _this$props.active,
        ariaLabel = _this$props['aria-label'],
        block = _this$props.block,
        className = _this$props.className,
        close = _this$props.close,
        cssModule = _this$props.cssModule,
        color = _this$props.color,
        outline = _this$props.outline,
        size = _this$props.size,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"]);

    if (close && typeof attributes.children === 'undefined') {
      attributes.children = react.createElement("span", {
        "aria-hidden": true
      }, "\xD7");
    }

    var btnOutlineColor = "btn" + (outline ? '-outline' : '') + "-" + color;
    var classes = mapToCssModules(classnames(className, {
      close: close
    }, close || 'btn', close || btnOutlineColor, size ? "btn-" + size : false, block ? 'btn-block' : false, {
      active: active,
      disabled: this.props.disabled
    }), cssModule);

    if (attributes.href && Tag === 'button') {
      Tag = 'a';
    }

    var defaultAriaLabel = close ? 'Close' : null;
    return react.createElement(Tag, _extends({
      type: Tag === 'button' && attributes.onClick ? 'button' : undefined
    }, attributes, {
      className: classes,
      ref: innerRef,
      onClick: this.onClick,
      "aria-label": ariaLabel || defaultAriaLabel
    }));
  };

  return Button;
}(react.Component);

Button.propTypes = propTypes$5;
Button.defaultProps = defaultProps$5;

var propTypes$6 = {
  children: propTypes$d.node,
  inline: propTypes$d.bool,
  tag: tagPropType,
  innerRef: propTypes$d.oneOfType([propTypes$d.object, propTypes$d.func, propTypes$d.string]),
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$6 = {
  tag: 'form'
};

var Form =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(Form, _Component);

  function Form(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.submit = _this.submit.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Form.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.submit = function submit() {
    if (this.ref) {
      this.ref.submit();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        inline = _this$props.inline,
        Tag = _this$props.tag,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "inline", "tag", "innerRef"]);

    var classes = mapToCssModules(classnames(className, inline ? 'form-inline' : false), cssModule);
    return react.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes
    }));
  };

  return Form;
}(react.Component);

Form.propTypes = propTypes$6;
Form.defaultProps = defaultProps$6;

var propTypes$7 = {
  children: propTypes$d.node,
  row: propTypes$d.bool,
  check: propTypes$d.bool,
  inline: propTypes$d.bool,
  disabled: propTypes$d.bool,
  tag: tagPropType,
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$7 = {
  tag: 'div'
};

var FormGroup = function FormGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      row = props.row,
      disabled = props.disabled,
      check = props.check,
      inline = props.inline,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "row", "disabled", "check", "inline", "tag"]);

  var classes = mapToCssModules(classnames(className, row ? 'row' : false, check ? 'form-check' : 'form-group', check && inline ? 'form-check-inline' : false, check && disabled ? 'disabled' : false), cssModule);

  if (Tag === 'fieldset') {
    attributes.disabled = disabled;
  }

  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

FormGroup.propTypes = propTypes$7;
FormGroup.defaultProps = defaultProps$7;

var propTypes$8 = {
  children: propTypes$d.node,
  type: propTypes$d.string,
  size: propTypes$d.string,
  bsSize: propTypes$d.string,
  valid: propTypes$d.bool,
  invalid: propTypes$d.bool,
  tag: tagPropType,
  innerRef: propTypes$d.oneOfType([propTypes$d.object, propTypes$d.func, propTypes$d.string]),
  plaintext: propTypes$d.bool,
  addon: propTypes$d.bool,
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$8 = {
  type: 'text'
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Input, _React$Component);

  function Input(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.getRef = _this.getRef.bind(_assertThisInitialized(_this));
    _this.focus = _this.focus.bind(_assertThisInitialized(_this));
    return _this;
  }

  var _proto = Input.prototype;

  _proto.getRef = function getRef(ref) {
    if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    this.ref = ref;
  };

  _proto.focus = function focus() {
    if (this.ref) {
      this.ref.focus();
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        className = _this$props.className,
        cssModule = _this$props.cssModule,
        type = _this$props.type,
        bsSize = _this$props.bsSize,
        valid = _this$props.valid,
        invalid = _this$props.invalid,
        tag = _this$props.tag,
        addon = _this$props.addon,
        plaintext = _this$props.plaintext,
        innerRef = _this$props.innerRef,
        attributes = _objectWithoutPropertiesLoose(_this$props, ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"]);

    var checkInput = ['radio', 'checkbox'].indexOf(type) > -1;
    var isNotaNumber = new RegExp('\\D', 'g');
    var fileInput = type === 'file';
    var textareaInput = type === 'textarea';
    var selectInput = type === 'select';
    var rangeInput = type === 'range';
    var Tag = tag || (selectInput || textareaInput ? type : 'input');
    var formControlClass = 'form-control';

    if (plaintext) {
      formControlClass = formControlClass + "-plaintext";
      Tag = tag || 'input';
    } else if (fileInput) {
      formControlClass = formControlClass + "-file";
    } else if (rangeInput) {
      formControlClass = formControlClass + "-range";
    } else if (checkInput) {
      if (addon) {
        formControlClass = null;
      } else {
        formControlClass = 'form-check-input';
      }
    }

    if (attributes.size && isNotaNumber.test(attributes.size)) {
      warnOnce('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.');
      bsSize = attributes.size;
      delete attributes.size;
    }

    var classes = mapToCssModules(classnames(className, invalid && 'is-invalid', valid && 'is-valid', bsSize ? "form-control-" + bsSize : false, formControlClass), cssModule);

    if (Tag === 'input' || tag && typeof tag === 'function') {
      attributes.type = type;
    }

    if (attributes.children && !(plaintext || type === 'select' || typeof Tag !== 'string' || Tag === 'select')) {
      warnOnce("Input with a type of \"" + type + "\" cannot have children. Please use \"value\"/\"defaultValue\" instead.");
      delete attributes.children;
    }

    return react.createElement(Tag, _extends({}, attributes, {
      ref: innerRef,
      className: classes,
      "aria-invalid": invalid
    }));
  };

  return Input;
}(react.Component);

Input.propTypes = propTypes$8;
Input.defaultProps = defaultProps$8;

var propTypes$9 = {
  tag: tagPropType,
  size: propTypes$d.string,
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$9 = {
  tag: 'div'
};

var InputGroup = function InputGroup(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "size"]);

  var classes = mapToCssModules(classnames(className, 'input-group', size ? "input-group-" + size : null), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroup.propTypes = propTypes$9;
InputGroup.defaultProps = defaultProps$9;

var propTypes$a = {
  tag: tagPropType,
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$a = {
  tag: 'span'
};

var InputGroupText = function InputGroupText(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag"]);

  var classes = mapToCssModules(classnames(className, 'input-group-text'), cssModule);
  return react.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

InputGroupText.propTypes = propTypes$a;
InputGroupText.defaultProps = defaultProps$a;

var propTypes$b = {
  tag: tagPropType,
  addonType: propTypes$d.oneOf(['prepend', 'append']).isRequired,
  children: propTypes$d.node,
  className: propTypes$d.string,
  cssModule: propTypes$d.object
};
var defaultProps$b = {
  tag: 'div'
};

var InputGroupAddon = function InputGroupAddon(props) {
  var className = props.className,
      cssModule = props.cssModule,
      Tag = props.tag,
      addonType = props.addonType,
      children = props.children,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "tag", "addonType", "children"]);

  var classes = mapToCssModules(classnames(className, 'input-group-' + addonType), cssModule); // Convenience to assist with transition

  if (typeof children === 'string') {
    return react.createElement(Tag, _extends({}, attributes, {
      className: classes
    }), react.createElement(InputGroupText, {
      children: children
    }));
  }

  return react.createElement(Tag, _extends({}, attributes, {
    className: classes,
    children: children
  }));
};

InputGroupAddon.propTypes = propTypes$b;
InputGroupAddon.defaultProps = defaultProps$b;

var colWidths$1 = ['xs', 'sm', 'md', 'lg', 'xl'];
var stringOrNumberProp$1 = propTypes$d.oneOfType([propTypes$d.number, propTypes$d.string]);
var columnProps$1 = propTypes$d.oneOfType([propTypes$d.bool, propTypes$d.string, propTypes$d.number, propTypes$d.shape({
  size: stringOrNumberProp$1,
  order: stringOrNumberProp$1,
  offset: stringOrNumberProp$1
})]);
var propTypes$c = {
  children: propTypes$d.node,
  hidden: propTypes$d.bool,
  check: propTypes$d.bool,
  size: propTypes$d.string,
  for: propTypes$d.string,
  tag: tagPropType,
  className: propTypes$d.string,
  cssModule: propTypes$d.object,
  xs: columnProps$1,
  sm: columnProps$1,
  md: columnProps$1,
  lg: columnProps$1,
  xl: columnProps$1,
  widths: propTypes$d.array
};
var defaultProps$c = {
  tag: 'label',
  widths: colWidths$1
};

var getColumnSizeClass$1 = function getColumnSizeClass(isXs, colWidth, colSize) {
  if (colSize === true || colSize === '') {
    return isXs ? 'col' : "col-" + colWidth;
  } else if (colSize === 'auto') {
    return isXs ? 'col-auto' : "col-" + colWidth + "-auto";
  }

  return isXs ? "col-" + colSize : "col-" + colWidth + "-" + colSize;
};

var Label = function Label(props) {
  var className = props.className,
      cssModule = props.cssModule,
      hidden = props.hidden,
      widths = props.widths,
      Tag = props.tag,
      check = props.check,
      size = props.size,
      htmlFor = props.for,
      attributes = _objectWithoutPropertiesLoose(props, ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"]);

  var colClasses = [];
  widths.forEach(function (colWidth, i) {
    var columnProp = props[colWidth];
    delete attributes[colWidth];

    if (!columnProp && columnProp !== '') {
      return;
    }

    var isXs = !i;
    var colClass;

    if (isObject(columnProp)) {
      var _classNames;

      var colSizeInterfix = isXs ? '-' : "-" + colWidth + "-";
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp.size);
      colClasses.push(mapToCssModules(classnames((_classNames = {}, _classNames[colClass] = columnProp.size || columnProp.size === '', _classNames["order" + colSizeInterfix + columnProp.order] = columnProp.order || columnProp.order === 0, _classNames["offset" + colSizeInterfix + columnProp.offset] = columnProp.offset || columnProp.offset === 0, _classNames))), cssModule);
    } else {
      colClass = getColumnSizeClass$1(isXs, colWidth, columnProp);
      colClasses.push(colClass);
    }
  });
  var classes = mapToCssModules(classnames(className, hidden ? 'sr-only' : false, check ? 'form-check-label' : false, size ? "col-form-label-" + size : false, colClasses, colClasses.length ? 'col-form-label' : false), cssModule);
  return react.createElement(Tag, _extends({
    htmlFor: htmlFor
  }, attributes, {
    className: classes
  }));
};

Label.propTypes = propTypes$c;
Label.defaultProps = defaultProps$c;

export { Button, Col, Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText, Label, Navbar, NavbarBrand, Row };
