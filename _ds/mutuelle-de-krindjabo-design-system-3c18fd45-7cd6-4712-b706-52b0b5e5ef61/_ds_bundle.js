/* @ds-bundle: {"format":4,"namespace":"MutuelleDeKrindjaboDesignSystem_3c18fd","components":[{"name":"SectionHeading","sourcePath":"components/brand/SectionHeading.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/brand/SectionHeading.jsx":"b561eebdf2ad","components/brand/Wordmark.jsx":"18f48de0fb89","components/core/Badge.jsx":"b979668e277c","components/core/Button.jsx":"e35c176f3f67","components/core/Card.jsx":"c335ef34db2b","components/core/IconButton.jsx":"dcb943ca0157","components/core/Tag.jsx":"697dec9afde0","components/feedback/Dialog.jsx":"a9a04ee04d2f","components/feedback/Toast.jsx":"dcb8661d6bc8","components/feedback/Tooltip.jsx":"caa06520d4fc","components/forms/Checkbox.jsx":"874a78cc5843","components/forms/Input.jsx":"5a8000bef4f1","components/forms/Radio.jsx":"a88210e10d07","components/forms/Select.jsx":"078743b35ed9","components/forms/Switch.jsx":"f3512cf5acbf","components/navigation/Tabs.jsx":"ce4dfb834dd6","ui_kits/site-vitrine/SectionsActions.jsx":"7090c6932667","ui_kits/site-vitrine/SectionsCommunity.jsx":"e17da1b85e74","ui_kits/site-vitrine/SectionsIntro.jsx":"39c866d15b06","ui_kits/site-vitrine/Shell.jsx":"dc1b81230c79"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MutuelleDeKrindjaboDesignSystem_3c18fd = window.MutuelleDeKrindjaboDesignSystem_3c18fd || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  action,
  style,
  ...rest
}) {
  const light = tone === "light";
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      alignItems: align === "center" ? "center" : "flex-start",
      textAlign: align === "center" ? "center" : "left",
      maxWidth: align === "center" ? "var(--container-narrow)" : undefined,
      marginLeft: align === "center" ? "auto" : undefined,
      marginRight: align === "center" ? "auto" : undefined,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), eyebrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: light ? "var(--ochre-300)" : "var(--text-accent)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "currentColor",
      borderRadius: 2
    }
  }), eyebrow) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--tracking-heading)",
      color: light ? "var(--text-on-dark)" : "var(--text-strong)",
      textWrap: "pretty"
    }
  }, title), intro ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "62ch",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--lh-body)",
      color: light ? "rgba(253,251,247,.78)" : "var(--text-muted)",
      textWrap: "pretty"
    }
  }, intro) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, action) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    main: 18,
    sub: 9,
    gap: 1
  },
  md: {
    main: 26,
    sub: 11,
    gap: 2
  },
  lg: {
    main: 40,
    sub: 14,
    gap: 3
  }
};
function Wordmark({
  size = "md",
  tone = "dark",
  layout = "stacked",
  style,
  ...rest
}) {
  const s = SIZES[size] || SIZES.md;
  const main = tone === "light" ? "var(--text-on-dark)" : "var(--green-700)";
  const sub = tone === "light" ? "var(--ochre-300)" : "var(--clay-600)";
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: layout === "stacked" ? "column" : "row",
      alignItems: layout === "stacked" ? "flex-start" : "baseline",
      gap: layout === "stacked" ? s.gap : 8,
      lineHeight: 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: s.main,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-display)",
      color: main,
      fontVariationSettings: "var(--fraunces-wonk)"
    }
  }, "Krindjabo"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: s.sub,
      fontWeight: "var(--weight-extra)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: sub
    }
  }, "Mutuelle de d\xE9veloppement"));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  neutral: {
    bg: "var(--surface-sunken)",
    fg: "var(--text-muted)",
    bd: "var(--border-subtle)"
  },
  brand: {
    bg: "var(--surface-brand-soft)",
    fg: "var(--green-700)",
    bd: "var(--green-100)"
  },
  accent: {
    bg: "var(--surface-accent-soft)",
    fg: "var(--clay-700)",
    bd: "var(--clay-100)"
  },
  success: {
    bg: "var(--state-success-soft)",
    fg: "var(--state-success)",
    bd: "var(--green-100)"
  },
  warning: {
    bg: "var(--state-warning-soft)",
    fg: "var(--ochre-700)",
    bd: "var(--ochre-100)"
  },
  danger: {
    bg: "var(--state-danger-soft)",
    fg: "var(--state-danger)",
    bd: "var(--clay-100)"
  },
  info: {
    bg: "var(--state-info-soft)",
    fg: "var(--state-info)",
    bd: "var(--indigo-100)"
  }
};
function Badge({
  tone = "neutral",
  dot = false,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "6px",
      height: 24,
      padding: "0 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-semibold)",
      color: t.fg,
      background: t.bg,
      border: `var(--border-width) solid ${t.bd}`,
      borderRadius: "var(--radius-pill)",
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "currentColor"
    }
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const VARIANTS = {
  primary: {
    bg: "var(--surface-brand)",
    fg: "var(--text-on-primary)",
    bd: "transparent",
    hoverBg: "var(--primary-hover)",
    activeBg: "var(--primary-active)",
    shadow: "var(--shadow-brand)"
  },
  accent: {
    bg: "var(--surface-accent)",
    fg: "var(--text-on-primary)",
    bd: "transparent",
    hoverBg: "var(--accent-hover)",
    activeBg: "var(--accent-active)",
    shadow: "var(--shadow-md)"
  },
  secondary: {
    bg: "transparent",
    fg: "var(--text-brand)",
    bd: "var(--border-brand)",
    hoverBg: "var(--surface-brand-soft)",
    activeBg: "var(--green-100)",
    shadow: "none"
  },
  ghost: {
    bg: "transparent",
    fg: "var(--text-body)",
    bd: "transparent",
    hoverBg: "var(--ghost-hover)",
    activeBg: "var(--ghost-active)",
    shadow: "none"
  },
  link: {
    bg: "transparent",
    fg: "var(--text-link)",
    bd: "transparent",
    hoverBg: "transparent",
    activeBg: "transparent",
    shadow: "none"
  }
};
const SIZES = {
  sm: {
    h: "var(--control-height-sm)",
    px: "14px",
    fs: "var(--text-sm)",
    gap: "6px"
  },
  md: {
    h: "var(--field-height)",
    px: "20px",
    fs: "var(--text-body)",
    gap: "8px"
  },
  lg: {
    h: "var(--control-height-lg)",
    px: "28px",
    fs: "17px",
    gap: "10px"
  }
};
function Button({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.h,
      padding: `0 ${s.px}`,
      width: fullWidth ? "100%" : undefined,
      fontFamily: "var(--font-sans)",
      fontSize: s.fs,
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "0.005em",
      lineHeight: 1,
      textDecoration: variant === "link" && hover ? "underline" : "none",
      textUnderlineOffset: "3px",
      color: disabled ? "var(--text-subtle)" : v.fg,
      background: disabled ? "var(--surface-sunken)" : press ? v.activeBg : hover ? v.hoverBg : v.bg,
      border: `var(--border-width) solid ${disabled ? "var(--border-subtle)" : v.bd}`,
      borderRadius: variant === "link" ? "var(--radius-xs)" : "var(--radius-button)",
      boxShadow: disabled || variant === "link" ? "none" : hover && !press ? v.shadow : "none",
      transform: press && !disabled ? "scale(var(--press-scale))" : "none",
      transition: "var(--transition-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      padding: variant === "link" ? 0 : `0 ${s.px}`,
      height: variant === "link" ? "auto" : s.h,
      ...style
    }
  }, rest), iconLeft, /*#__PURE__*/React.createElement("span", {
    style: {
      whiteSpace: "nowrap"
    }
  }, children), iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const TONES = {
  default: {
    bg: "var(--surface-card)",
    bd: "var(--border-subtle)",
    fg: "var(--text-body)"
  },
  soft: {
    bg: "var(--surface-brand-soft)",
    bd: "var(--green-100)",
    fg: "var(--text-body)"
  },
  highlight: {
    bg: "var(--surface-highlight)",
    bd: "var(--ochre-100)",
    fg: "var(--text-body)"
  },
  dark: {
    bg: "var(--surface-dark)",
    bd: "transparent",
    fg: "var(--text-on-dark)"
  },
  outline: {
    bg: "transparent",
    bd: "var(--border-default)",
    fg: "var(--text-body)"
  }
};
function Card({
  tone = "default",
  eyebrow,
  title,
  icon,
  media,
  footer,
  interactive = false,
  padding = "var(--space-6)",
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const t = TONES[tone] || TONES.default;
  const lifted = interactive && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      background: t.bg,
      color: t.fg,
      border: `var(--border-width) solid ${lifted ? "var(--border-brand)" : t.bd}`,
      borderRadius: "var(--radius-card)",
      boxShadow: lifted ? "var(--shadow-lg)" : "var(--shadow-sm)",
      transform: lifted ? "translateY(var(--lift-y))" : "none",
      transition: "transform var(--duration-base) var(--ease-standard),box-shadow var(--duration-base) var(--ease-standard),border-color var(--duration-base) var(--ease-standard)",
      cursor: interactive ? "pointer" : "default",
      ...style
    }
  }, rest), media, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: 44,
      height: 44,
      borderRadius: "var(--radius-pill)",
      background: tone === "dark" ? "rgba(255,255,255,.12)" : "var(--surface-brand-soft)",
      color: tone === "dark" ? "var(--ochre-300)" : "var(--text-brand)"
    }
  }, icon) : null, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: tone === "dark" ? "var(--ochre-300)" : "var(--text-accent)"
    }
  }, eyebrow) : null, title ? /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      fontWeight: "var(--weight-semibold)",
      lineHeight: "var(--lh-heading)",
      letterSpacing: "var(--tracking-heading)",
      color: tone === "dark" ? "var(--text-on-dark)" : "var(--text-strong)"
    }
  }, title) : null, children ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--lh-body)",
      color: tone === "dark" ? "rgba(253,251,247,.78)" : "var(--text-muted)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: 36,
  md: 44,
  lg: 52
};
function IconButton({
  icon,
  label,
  variant = "ghost",
  size = "md",
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const px = SIZES[size] || SIZES.md;
  const tones = {
    ghost: {
      bg: hover ? "var(--ghost-hover)" : "transparent",
      fg: "var(--text-body)",
      bd: "transparent"
    },
    outline: {
      bg: hover ? "var(--surface-brand-soft)" : "var(--surface-card)",
      fg: "var(--text-brand)",
      bd: "var(--border-default)"
    },
    solid: {
      bg: hover ? "var(--primary-hover)" : "var(--surface-brand)",
      fg: "var(--text-on-primary)",
      bd: "transparent"
    }
  };
  const t = tones[variant] || tones.ghost;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: px,
      height: px,
      padding: 0,
      color: disabled ? "var(--text-subtle)" : t.fg,
      background: disabled ? "var(--surface-sunken)" : t.bg,
      border: `var(--border-width) solid ${t.bd}`,
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tag({
  selected = false,
  onClick,
  onRemove,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const clickable = Boolean(onClick);
  return /*#__PURE__*/React.createElement("span", _extends({
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      height: 32,
      padding: "0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-medium)",
      color: selected ? "var(--text-on-primary)" : "var(--text-body)",
      background: selected ? "var(--surface-brand)" : hover && clickable ? "var(--ghost-hover)" : "var(--surface-card)",
      border: `var(--border-width) solid ${selected ? "transparent" : "var(--border-default)"}`,
      borderRadius: "var(--radius-pill)",
      cursor: clickable ? "pointer" : "default",
      transition: "var(--transition-control)",
      ...style
    }
  }, rest), children, onRemove ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Retirer",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    style: {
      display: "inline-flex",
      border: "none",
      background: "none",
      padding: 0,
      cursor: "pointer",
      color: "inherit",
      opacity: .7,
      lineHeight: 1,
      fontSize: "15px"
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Dialog({
  open = true,
  title,
  description,
  footer,
  onClose,
  width = 520,
  children,
  style,
  ...rest
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    role: "presentation",
    onClick: onClose,
    style: {
      position: "absolute",
      inset: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-6)",
      background: "var(--surface-overlay)",
      backdropFilter: "blur(3px)",
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      fontFamily: "var(--font-sans)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-6) var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "6px"
    }
  }, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: "var(--weight-semibold)",
      letterSpacing: "var(--tracking-heading)",
      color: "var(--text-strong)"
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, description) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fermer",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      fontSize: "20px",
      lineHeight: 1,
      color: "var(--text-muted)",
      padding: 4
    }
  }, "\xD7") : null), children ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-6)",
      fontSize: "var(--text-body)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)"
    }
  }, children) : null, footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-6)",
      marginTop: "var(--space-2)"
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const TONES = {
  success: {
    bd: "var(--state-success)",
    bg: "var(--state-success-soft)",
    fg: "var(--green-800)"
  },
  info: {
    bd: "var(--state-info)",
    bg: "var(--state-info-soft)",
    fg: "var(--indigo-700)"
  },
  warning: {
    bd: "var(--state-warning)",
    bg: "var(--state-warning-soft)",
    fg: "var(--ochre-700)"
  },
  danger: {
    bd: "var(--state-danger)",
    bg: "var(--state-danger-soft)",
    fg: "var(--clay-800)"
  }
};
function Toast({
  tone = "success",
  title,
  message,
  icon,
  onClose,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.success;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      minWidth: 280,
      maxWidth: 440,
      padding: "14px 16px",
      fontFamily: "var(--font-sans)",
      background: t.bg,
      color: t.fg,
      border: `var(--border-width) solid ${t.bd}`,
      borderRadius: "var(--radius-md)",
      boxShadow: "var(--shadow-lg)",
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      color: t.bd,
      marginTop: 1
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, title ? /*#__PURE__*/React.createElement("strong", {
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-bold)"
    }
  }, title) : null, message ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, message) : null), onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Fermer",
    onClick: onClose,
    style: {
      border: "none",
      background: "none",
      cursor: "pointer",
      color: "inherit",
      opacity: .6,
      fontSize: "16px",
      lineHeight: 1
    }
  }, "\xD7") : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const POS = {
  top: {
    bottom: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  },
  bottom: {
    top: "calc(100% + 8px)",
    left: "50%",
    transform: "translateX(-50%)"
  },
  left: {
    right: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  },
  right: {
    left: "calc(100% + 8px)",
    top: "50%",
    transform: "translateY(-50%)"
  }
};
function Tooltip({
  content,
  placement = "top",
  children,
  style,
  ...rest
}) {
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/React.createElement("span", _extends({
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false),
    style: {
      position: "relative",
      display: "inline-flex",
      ...style
    }
  }, rest), children, open ? /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 70,
      whiteSpace: "nowrap",
      padding: "6px 10px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      color: "var(--text-on-dark)",
      background: "var(--surface-dark)",
      borderRadius: "var(--radius-sm)",
      boxShadow: "var(--shadow-md)",
      pointerEvents: "none",
      ...POS[placement]
    }
  }, content) : null);
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Checkbox({
  label,
  description,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const fieldId = id || (label ? "c-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: 20,
      height: 20,
      margin: 0,
      marginTop: 1,
      accentColor: "var(--green-600)",
      cursor: "inherit",
      flex: "0 0 auto"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-body)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  label,
  hint,
  error,
  iconLeft,
  suffix,
  type = "text",
  value,
  defaultValue,
  placeholder,
  disabled = false,
  required = false,
  multiline = false,
  rows = 4,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? "f-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);
  const borderColor = error ? "var(--state-danger)" : focus ? "var(--border-brand)" : "var(--border-default)";
  const Tag = multiline ? "textarea" : "input";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--state-danger)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: multiline ? "flex-start" : "center",
      gap: "10px",
      minHeight: multiline ? undefined : "var(--field-height)",
      padding: multiline ? "12px 14px" : "0 14px",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `var(--border-width) solid ${borderColor}`,
      borderRadius: "var(--radius-field)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)",
      color: "var(--text-muted)"
    }
  }, iconLeft, /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    type: multiline ? undefined : type,
    rows: multiline ? rows : undefined,
    value: value,
    defaultValue: defaultValue,
    placeholder: placeholder,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      width: "100%",
      border: "none",
      outline: "none",
      background: "transparent",
      resize: multiline ? "vertical" : undefined,
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      lineHeight: multiline ? "var(--lh-body)" : 1.4,
      color: "var(--text-strong)",
      padding: 0
    }
  }, rest)), suffix), error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--state-danger)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Radio({
  label,
  description,
  name,
  value,
  checked,
  defaultChecked,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const fieldId = id || (name && value ? `r-${name}-${value}` : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      fontFamily: "var(--font-sans)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    defaultChecked: defaultChecked,
    disabled: disabled,
    onChange: onChange,
    style: {
      width: 20,
      height: 20,
      margin: 0,
      marginTop: 1,
      accentColor: "var(--green-600)",
      cursor: "inherit",
      flex: "0 0 auto"
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-body)"
    }
  }, description) : null));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  hint,
  options = [],
  value,
  defaultValue,
  placeholder = "Choisir…",
  disabled = false,
  required = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? "s-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-") : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: "var(--weight-semibold)",
      color: "var(--text-strong)"
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--state-danger)"
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    required: required,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: "none",
      width: "100%",
      height: "var(--field-height)",
      padding: "0 40px 0 14px",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-body)",
      color: "var(--text-strong)",
      background: disabled ? "var(--surface-sunken)" : "var(--surface-card)",
      border: `var(--border-width) solid ${focus ? "var(--border-brand)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-field)",
      boxShadow: focus ? "var(--focus-ring)" : "none",
      transition: "var(--transition-control)",
      cursor: disabled ? "not-allowed" : "pointer",
      outline: "none"
    }
  }, rest), placeholder ? /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder) : null, options.map(o => {
    const opt = typeof o === "string" ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      right: 14,
      pointerEvents: "none",
      color: "var(--text-muted)",
      fontSize: "12px"
    }
  }, "\u25BE")), hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Switch({
  label,
  description,
  checked,
  defaultChecked = false,
  disabled = false,
  onChange,
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(defaultChecked);
  const on = checked === undefined ? internal : checked;
  const toggle = () => {
    if (disabled) return;
    if (checked === undefined) setInternal(!on);
    if (onChange) onChange(!on);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      fontFamily: "var(--font-sans)",
      opacity: disabled ? .55 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": on,
    onClick: toggle,
    disabled: disabled,
    style: {
      position: "relative",
      width: 46,
      height: 26,
      flex: "0 0 auto",
      padding: 0,
      background: on ? "var(--surface-brand)" : "var(--sand-300)",
      border: "none",
      borderRadius: "var(--radius-pill)",
      cursor: disabled ? "not-allowed" : "pointer",
      transition: "background-color var(--duration-base) var(--ease-standard)"
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      top: 3,
      left: on ? 23 : 3,
      width: 20,
      height: 20,
      background: "#FFFFFF",
      borderRadius: "50%",
      boxShadow: "var(--shadow-sm)",
      transition: "left var(--duration-base) var(--ease-standard)"
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "2px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-body)",
      color: "var(--text-strong)"
    }
  }, label), description ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--text-muted)",
      lineHeight: "var(--lh-body)"
    }
  }, description) : null) : null);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "underline",
  style,
  ...rest
}) {
  const [internal, setInternal] = useState(defaultValue || items[0] && (items[0].value || items[0]));
  const active = value === undefined ? internal : value;
  const select = v => {
    if (value === undefined) setInternal(v);
    if (onChange) onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: "flex",
      alignItems: "center",
      gap: variant === "pill" ? "6px" : "var(--space-6)",
      padding: variant === "pill" ? "4px" : 0,
      background: variant === "pill" ? "var(--surface-sunken)" : "transparent",
      borderRadius: variant === "pill" ? "var(--radius-pill)" : 0,
      borderBottom: variant === "underline" ? "var(--border-width) solid var(--border-subtle)" : "none",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, rest), items.map(it => {
    const item = typeof it === "string" ? {
      value: it,
      label: it
    } : it;
    const on = item.value === active;
    return /*#__PURE__*/React.createElement("button", {
      key: item.value,
      role: "tab",
      "aria-selected": on,
      onClick: () => select(item.value),
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        border: "none",
        cursor: "pointer",
        fontFamily: "inherit",
        fontSize: "var(--text-sm)",
        fontWeight: "var(--weight-semibold)",
        padding: variant === "pill" ? "0 16px" : "0 0 12px",
        height: variant === "pill" ? 34 : "auto",
        background: variant === "pill" ? on ? "var(--surface-card)" : "transparent" : "transparent",
        borderRadius: variant === "pill" ? "var(--radius-pill)" : 0,
        boxShadow: variant === "pill" && on ? "var(--shadow-xs)" : "none",
        color: on ? "var(--text-brand)" : "var(--text-muted)",
        borderBottom: variant === "underline" ? `2px solid ${on ? "var(--border-brand)" : "transparent"}` : "none",
        marginBottom: variant === "underline" ? "-1px" : 0,
        transition: "var(--transition-control)"
      }
    }, item.icon, item.label, item.count !== undefined ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-subtle)"
      }
    }, item.count) : null);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/SectionsActions.jsx
try { (() => {
/* DONNÉES FICTIVES : à remplacer par les projets réels de la mutuelle. */
const PROJETS = [{
  t: "Réhabilitation de l'école primaire",
  c: "Éducation",
  lieu: "Krindjabo centre",
  statut: "Réalisé",
  date: "Mars 2024 – Août 2024",
  d: "Réfection des salles de classe et fourniture de mobilier scolaire.",
  o: "Offrir aux élèves du village des conditions d'apprentissage décentes."
}, {
  t: "Point d'eau potable",
  c: "Eau",
  lieu: "Quartier Adaou",
  statut: "En cours",
  date: "Depuis juin 2026",
  d: "Installation d'un forage et d'une borne-fontaine pour les familles du quartier.",
  o: "Réduire les distances d'approvisionnement en eau."
}, {
  t: "Dotation du centre de santé",
  c: "Santé",
  lieu: "Krindjabo",
  statut: "En cours",
  date: "Depuis avril 2026",
  d: "Équipement de la salle de soins et appui en consommables médicaux.",
  o: "Améliorer la prise en charge de première urgence au village."
}, {
  t: "Éclairage de la place du village",
  c: "Infrastructures",
  lieu: "Place du village",
  statut: "À venir",
  date: "Prévu en janvier 2027",
  d: "Pose de lampadaires solaires sur la place et l'axe principal.",
  o: "Sécuriser les déplacements et les rassemblements du soir."
}, {
  t: "Reboisement communautaire",
  c: "Environnement",
  lieu: "Abords du village",
  statut: "À venir",
  date: "Prévu en mai 2027",
  d: "Plantation d'arbres avec les jeunes et les écoles.",
  o: "Protéger les sols et transmettre une culture environnementale."
}, {
  t: "Festival des générations",
  c: "Culture",
  lieu: "Krindjabo",
  statut: "Réalisé",
  date: "Décembre 2023",
  d: "Trois jours de célébration des traditions et de l'histoire du village.",
  o: "Transmettre le patrimoine culturel aux plus jeunes."
}, {
  t: "Terrain de sport et club des jeunes",
  c: "Jeunesse",
  lieu: "Krindjabo centre",
  statut: "En cours",
  date: "Depuis février 2026",
  d: "Aménagement d'un terrain multisport et création d'un club encadré par les aînés.",
  o: "Offrir aux jeunes du village un cadre de rassemblement et d'encadrement."
}, {
  t: "Coopérative maraîchère des femmes",
  c: "Développement communautaire",
  lieu: "Quartier Yaou",
  statut: "À venir",
  date: "Prévu en mars 2027",
  d: "Appui à un groupement de trente femmes : semences, outillage et formation.",
  o: "Créer une source de revenus stable pour les familles du quartier."
}];
const STATUT_TONE = {
  "Réalisé": "success",
  "En cours": "warning",
  "À venir": "info"
};
function NosActions() {
  const actions = [["hand-heart", "Soutien aux membres", "Accompagnement des membres et des familles lorsqu'ils traversent des périodes difficiles."], ["party-popper", "Moments de joie", "Présence de la mutuelle pour les mariages, naissances, réussites, anniversaires et autres événements familiaux."], ["users", "Solidarité familiale", "La communauté se mobilise autour des familles, dans la durée et sans distinction."], ["hammer", "Actions communautaires", "Actions collectives menées au bénéfice du village et de ses habitants."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "actions",
    style: {
      background: "var(--surface-sunken)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos actions",
    title: "Comment la mutuelle intervient",
    intro: "Quatre formes d'engagement, dans les \xE9preuves comme dans les c\xE9l\xE9brations."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-4",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, actions.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i % 4 * 80
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "var(--space-5)",
    style: {
      height: "100%"
    },
    media: /*#__PURE__*/React.createElement(Photo, {
      label: "Photo \xE0 fournir",
      height: 150,
      radius: "0",
      style: {
        border: "none",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }),
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: ic
    }),
    title: t
  }, d))))));
}
function NosProjets() {
  const [filtre, setFiltre] = React.useState("Tous");
  const [actif, setActif] = React.useState(null);
  const cats = ["Tous", ...Array.from(new Set(PROJETS.map(p => p.c)))];
  const list = filtre === "Tous" ? PROJETS : PROJETS.filter(p => p.c === filtre);
  return /*#__PURE__*/React.createElement("section", {
    id: "projets",
    style: {
      padding: "var(--section-y) 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos projets",
    title: "Nos projets pour le d\xE9veloppement de Krindjabo",
    intro: "\xC9ducation, sant\xE9, eau, infrastructures, environnement, culture : les chantiers port\xE9s par la mutuelle."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      flexWrap: "wrap",
      margin: "var(--space-8) 0"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(Tag, {
    key: c,
    selected: filtre === c,
    onClick: () => setFiltre(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, list.map((p, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: p.t,
    delay: i % 3 * 80
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "var(--space-5)",
    onClick: () => setActif(p),
    style: {
      height: "100%"
    },
    media: /*#__PURE__*/React.createElement(Photo, {
      label: "Photo du projet \xE0 fournir",
      height: 170,
      radius: "0",
      style: {
        border: "none",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }),
    eyebrow: p.c,
    title: p.t,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-3)"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: STATUT_TONE[p.statut],
      dot: true
    }, p.statut), /*#__PURE__*/React.createElement("span", {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: "var(--text-xs)",
        color: "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      n: "map-pin",
      s: 14
    }), p.lieu))
  }, p.d)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-6)",
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)"
    }
  }, "Projets pr\xE9sent\xE9s \xE0 titre d'exemple : \xE0 remplacer par les projets r\xE9els dans le tableau ", /*#__PURE__*/React.createElement("code", null, "PROJETS"), ".")), /*#__PURE__*/React.createElement(Dialog, {
    open: Boolean(actif),
    width: 620,
    onClose: () => setActif(null),
    title: actif ? actif.t : "",
    description: actif ? `${actif.c} · ${actif.lieu}` : "",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setActif(null)
    }, "Fermer"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setActif(null);
        scrollToId("adhesion");
      }
    }, "Contribuer \xE0 ce projet"))
  }, actif ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "2fr 1fr",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Photo principale \xE0 fournir",
    height: 180,
    radius: "var(--radius-md)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Photo",
    height: 84,
    radius: "var(--radius-md)"
  }), /*#__PURE__*/React.createElement(Photo, {
    label: "Photo",
    height: 84,
    radius: "var(--radius-md)"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: "var(--lh-body)"
    }
  }, actif.d), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3)"
    }
  }, [["Objectif", actif.o], ["Lieu", actif.lieu], ["Date", actif.date], ["Statut", actif.statut]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      padding: "var(--space-4)",
      background: "var(--surface-sunken)",
      borderRadius: "var(--radius-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-accent)"
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--text-body)",
      marginTop: 4
    }
  }, v))))) : null));
}

/* DONNÉES FICTIVES : à remplacer par les réalisations réelles. */
const REALISATIONS = [{
  t: "Remise de kits scolaires",
  lieu: "École primaire de Krindjabo",
  date: "Septembre 2025",
  d: "Distribution de fournitures aux élèves du village en présence du bureau."
}, {
  t: "Journée de salubrité",
  lieu: "Place du village",
  date: "Mars 2025",
  d: "Nettoyage collectif de la place et des abords de l'école."
}, {
  t: "Appui à une famille endeuillée",
  lieu: "Quartier Yaou",
  date: "Janvier 2025",
  d: "Accompagnement financier et présence de la délégation de la mutuelle."
}, {
  t: "Assemblée générale annuelle",
  lieu: "Krindjabo",
  date: "Octobre 2024",
  d: "Présentation du rapport moral et des comptes devant les membres."
}, {
  t: "Don de matériel au centre de santé",
  lieu: "Krindjabo",
  date: "Juin 2024",
  d: "Remise de consommables et de petit matériel de soins."
}];
function NosRealisations() {
  const [i, setI] = React.useState(0);
  const [actif, setActif] = React.useState(null);
  const [pause, setPause] = React.useState(false);
  const perView = 3;
  const max = Math.max(0, REALISATIONS.length - perView);
  React.useEffect(() => {
    if (pause) return;
    const id = setInterval(() => setI(v => v >= max ? 0 : v + 1), 3800);
    return () => clearInterval(id);
  }, [pause, max]);
  return /*#__PURE__*/React.createElement("section", {
    id: "realisations",
    style: {
      background: "var(--surface-brand-soft)",
      padding: "var(--section-y) 0",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos r\xE9alisations",
    title: "Ce que nous avons d\xE9j\xE0 accompli"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "chevron-left",
      s: 20
    }),
    label: "Pr\xE9c\xE9dent",
    variant: "outline",
    onClick: () => setI(v => v <= 0 ? max : v - 1)
  }), /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "chevron-right",
      s: 20
    }),
    label: "Suivant",
    variant: "outline",
    onClick: () => setI(v => v >= max ? 0 : v + 1)
  }))), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setPause(true),
    onMouseLeave: () => setPause(false),
    style: {
      marginTop: "var(--space-10)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      transform: `translateX(calc(${-i} * (100% + var(--space-6)) / ${perView}))`,
      transition: "transform var(--duration-slow) var(--ease-standard)"
    }
  }, REALISATIONS.map(r => /*#__PURE__*/React.createElement("div", {
    key: r.t,
    style: {
      flex: `0 0 calc((100% - 2 * var(--space-6)) / ${perView})`
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "var(--space-5)",
    onClick: () => setActif(r),
    style: {
      height: "100%"
    },
    media: /*#__PURE__*/React.createElement(Photo, {
      label: "Photo \xE0 fournir",
      height: 180,
      radius: "0",
      style: {
        border: "none",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }),
    title: r.t,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        fontSize: "var(--text-xs)",
        color: "var(--text-subtle)"
      }
    }, /*#__PURE__*/React.createElement("span", null, r.lieu), /*#__PURE__*/React.createElement("span", null, r.date))
  }, r.d))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: 6,
      marginTop: "var(--space-6)"
    }
  }, Array.from({
    length: max + 1
  }).map((_, n) => /*#__PURE__*/React.createElement("button", {
    key: n,
    "aria-label": `Vue ${n + 1}`,
    onClick: () => setI(n),
    style: {
      width: n === i ? 22 : 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      border: "none",
      cursor: "pointer",
      background: n === i ? "var(--green-600)" : "var(--green-200)",
      transition: "width var(--duration-base) var(--ease-standard)"
    }
  })))), /*#__PURE__*/React.createElement(Dialog, {
    open: Boolean(actif),
    width: 620,
    onClose: () => setActif(null),
    title: actif ? actif.t : "",
    description: actif ? `${actif.lieu} · ${actif.date}` : "",
    footer: /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setActif(null)
    }, "Fermer")
  }, actif ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Photo, {
    label: "Galerie photos \xE0 fournir",
    height: 200,
    radius: "var(--radius-md)"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-3)"
    }
  }, [1, 2, 3].map(n => /*#__PURE__*/React.createElement(Photo, {
    key: n,
    label: "Photo",
    height: 70,
    radius: "var(--radius-sm)"
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: "var(--lh-body)"
    }
  }, actif.d)) : null));
}
function MomentsEnsemble() {
  const items = [["Réunion du bureau", 260], ["Cérémonie au village", 180], ["Journée communautaire", 200], ["Rencontre de la diaspora", 240], ["Remise de dons", 190], ["Fête de génération", 300], ["Assemblée générale", 210], ["Activité des jeunes", 170]];
  return /*#__PURE__*/React.createElement("section", {
    id: "moments",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos moments ensemble",
    align: "center",
    title: "La vie de la communaut\xE9 en images",
    intro: "R\xE9unions, rencontres, c\xE9r\xE9monies, activit\xE9s et moments de partage."
  }), /*#__PURE__*/React.createElement("div", {
    className: "masonry",
    style: {
      columns: 4,
      columnGap: "var(--space-4)",
      marginTop: "var(--space-10)"
    }
  }, items.map(([label, h], i) => /*#__PURE__*/React.createElement("div", {
    key: label,
    style: {
      breakInside: "avoid",
      marginBottom: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    delay: i % 4 * 70
  }, /*#__PURE__*/React.createElement(Photo, {
    label: label,
    height: h,
    radius: "var(--radius-md)"
  }))))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)",
      textAlign: "center"
    }
  }, "Galerie en attente des photographies de la mutuelle.")));
}
Object.assign(window, {
  NosActions,
  NosProjets,
  NosRealisations,
  MomentsEnsemble,
  PROJETS,
  REALISATIONS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/SectionsActions.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/SectionsCommunity.jsx
try { (() => {
/* Chiffres clés — DONNÉES FICTIVES, à remplacer par les chiffres réels du bureau. */
const CHIFFRES = [{
  n: "486",
  l: "Membres"
}, {
  n: "132",
  l: "Familles"
}, {
  n: "24",
  l: "Projets réalisés"
}, {
  n: "28",
  l: "Années d'engagement"
}];

/* Compteur animé : compte de 0 à la valeur quand elle est numérique, affiche le texte tel quel sinon (« XXX »). */
function Compteur({
  valeur,
  duree = 1400
}) {
  const cible = parseFloat(String(valeur).replace(/[^0-9.,]/g, "").replace(",", "."));
  const numerique = !isNaN(cible);
  const ref = React.useRef(null);
  const [val, setVal] = React.useState(numerique ? 0 : valeur);
  React.useEffect(() => {
    if (!numerique) {
      setVal(valeur);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const reduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const suffixe = String(valeur).replace(/^[0-9.,\s]+/, "");
    const finir = () => setVal(valeur);
    if (reduit) {
      finir();
      return;
    }
    let raf, start;
    const animer = () => {
      const step = t => {
        if (!start) start = t;
        const p = Math.min(1, (t - start) / duree);
        const e = 1 - Math.pow(1 - p, 3);
        const v = cible * e;
        setVal((cible % 1 ? v.toFixed(1) : Math.round(v).toLocaleString("fr-FR")) + suffixe);
        if (p < 1) raf = requestAnimationFrame(step);else finir();
      };
      raf = requestAnimationFrame(step);
    };
    const io = new IntersectionObserver(es => {
      es.forEach(en => {
        if (en.isIntersecting) {
          animer();
          io.disconnect();
        }
      });
    }, {
      threshold: .4
    });
    io.observe(el);
    return () => {
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, [valeur]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, val);
}
function NosMembres({
  onJoin
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "membres",
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos membres",
    tone: "light",
    align: "center",
    title: "Chaque membre est une force",
    intro: "La mutuelle rassemble plusieurs g\xE9n\xE9rations, au village et ailleurs : familles, jeunes, a\xEEn\xE9s et sympathisants."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-4",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)",
      margin: "var(--space-12) 0"
    }
  }, CHIFFRES.map((c, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: c.l,
    delay: i * 90
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-6)",
      background: "rgba(255,255,255,.06)",
      border: "1px solid rgba(253,251,247,.14)",
      borderRadius: "var(--radius-lg)",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h1)",
      fontWeight: 600,
      color: "var(--ochre-300)",
      letterSpacing: "var(--tracking-display)"
    }
  }, /*#__PURE__*/React.createElement(Compteur, {
    valeur: c.n
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      color: "rgba(253,251,247,.75)",
      marginTop: 4
    }
  }, c.l))))), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-4)"
    }
  }, ["Membres au village", "Membres de la diaspora", "Jeunes de la mutuelle"].map(l => /*#__PURE__*/React.createElement(Photo, {
    key: l,
    tone: "dark",
    label: l + " — photo à fournir",
    height: 200,
    radius: "var(--radius-md)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "var(--space-6)",
      marginTop: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      maxWidth: "48ch",
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      lineHeight: "var(--lh-heading)",
      color: "var(--text-on-dark)"
    }
  }, "\xAB Chaque membre est une force. Ensemble, nous formons une communaut\xE9 capable d'agir pour Krindjabo. \xBB"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: onJoin
  }, "Rejoindre la communaut\xE9"))));
}
function Adhesion({
  open,
  onOpen,
  onClose,
  onSent
}) {
  const etapes = [["01", "Demande d'adhésion", "Le membre renseigne ses informations."], ["02", "Validation", "La demande est examinée conformément aux règles de la mutuelle."], ["03", "Adhésion", "Le membre est officiellement intégré à la communauté."], ["04", "Participation", "Le membre participe aux activités et contribue aux actions de solidarité et de développement."]];
  /* Cotisations — DONNÉES FICTIVES : à remplacer par les règles officielles de la mutuelle. */
  const cotisations = [["coins", "Montant de la cotisation", "12 000 F CFA par an et par membre. 6 000 F CFA pour les étudiants et les membres de plus de 70 ans."], ["repeat", "Fréquence", "Annuelle, réglable en une fois ou en deux tranches de 6 000 F CFA."], ["smartphone", "Modalités de paiement", "Wave, Orange Money, ou en espèces auprès du trésorier au village. Reçu remis sous 72 heures."], ["calendar-clock", "Échéance", "31 mars pour la cotisation annuelle. Deuxième tranche au plus tard le 30 septembre."], ["circle-alert", "Cotisations exceptionnelles", "Appels ponctuels votés en assemblée générale (deuil d'un membre, lancement d'un projet)."]];
  return /*#__PURE__*/React.createElement("section", {
    id: "adhesion",
    style: {
      padding: "var(--section-y) 0",
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Adh\xE9sions & cotisations",
    title: "Rejoindre la mutuelle, simplement",
    intro: "Le parcours d'adh\xE9sion en quatre \xE9tapes, puis la participation \xE0 la vie de la communaut\xE9."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-4",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: "var(--space-6)",
      margin: "var(--space-10) 0 var(--space-16)"
    }
  }, etapes.map(([n, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: n,
    delay: i * 80
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      padding: "var(--space-6)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      height: "100%"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      fontWeight: 600,
      color: "var(--clay-600)"
    }
  }, n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      fontWeight: 600,
      color: "var(--text-strong)"
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      lineHeight: "var(--lh-body)",
      color: "var(--text-muted)"
    }
  }, d))))), /*#__PURE__*/React.createElement("div", {
    className: "two-col",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Cotisations",
    title: "Une contribution claire et connue de tous"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      marginTop: "var(--space-6)"
    }
  }, cotisations.map(([ic, t, v]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-5)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: ic
    }),
    title: t
  }, /*#__PURE__*/React.createElement("span", null, v)))), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)"
    }
  }, "Montants et modalit\xE9s donn\xE9s \xE0 titre d'exemple, modifiables dans le tableau ", /*#__PURE__*/React.createElement("code", null, "cotisations"), " du code.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "soft",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: "hand-heart"
    }),
    eyebrow: "Transparence et engagement",
    title: "\xC0 quoi servent les cotisations"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "var(--space-2) 0 0",
      paddingLeft: 18,
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, ["les membres en difficulté", "les familles", "les actions sociales", "les projets communautaires", "les initiatives de développement du village"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t
  }, t)))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: "var(--space-6)",
      background: "var(--surface-highlight)",
      borderRadius: "var(--radius-card)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      lineHeight: "var(--lh-heading)",
      color: "var(--ochre-700)"
    }
  }, "\xAB Nos cotisations ne sont pas seulement une contribution : elles sont un engagement envers notre communaut\xE9. \xBB"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onOpen,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right"
    })
  }, "Demander mon adh\xE9sion")))), /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    width: 640,
    onClose: onClose,
    title: "Demande d'adh\xE9sion",
    description: "Renseignez vos informations : le bureau examine chaque demande selon les r\xE8gles de la mutuelle.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Annuler"), /*#__PURE__*/React.createElement(Button, {
      onClick: onSent
    }, "Envoyer ma demande d'adh\xE9sion"))
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)",
      paddingBottom: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom et pr\xE9nom",
    placeholder: "Ex. Kouassi Ama",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Date de naissance",
    type: "date"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "T\xE9l\xE9phone",
    placeholder: "00 00 00 00 00",
    required: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "phone",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    placeholder: "nom@exemple.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "mail",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Ville / lieu de r\xE9sidence",
    placeholder: "Ex. Abidjan"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Lien avec Krindjabo",
    placeholder: "Ex. natif du village"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Profession",
    placeholder: "Facultatif"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Informations compl\xE9mentaires",
    placeholder: "Facultatif"
  }))));
}
const ACTUALITES = [{
  t: "Réunion mensuelle du bureau",
  d: "5 septembre 2026",
  r: "Point sur les projets en cours et préparation de l'assemblée générale."
}, {
  t: "Lancement du point d'eau du quartier Adaou",
  d: "22 août 2026",
  r: "Les travaux de forage ont démarré avec la participation des jeunes du village."
}, {
  t: "Appel à contribution pour la rentrée scolaire",
  d: "3 août 2026",
  r: "La mutuelle prépare la dotation en fournitures pour les élèves du village."
}];
function Actualites() {
  return /*#__PURE__*/React.createElement("section", {
    id: "actualites",
    style: {
      background: "var(--surface-sunken)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Actualit\xE9s",
    title: "Actualit\xE9s de la mutuelle",
    intro: "Annonces, r\xE9unions, \xE9v\xE9nements, comptes rendus et activit\xE9s communautaires."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, ACTUALITES.map((a, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: a.t,
    delay: i % 3 * 80
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    padding: "var(--space-5)",
    style: {
      height: "100%"
    },
    media: /*#__PURE__*/React.createElement(Photo, {
      label: "Photo \xE0 fournir",
      height: 160,
      radius: "0",
      style: {
        border: "none",
        borderBottom: "1px solid var(--border-subtle)"
      }
    }),
    title: a.t,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: "var(--text-xs)",
        color: "var(--text-subtle)"
      }
    }, a.d), /*#__PURE__*/React.createElement(Button, {
      variant: "link"
    }, "Lire la suite"))
  }, a.r))))));
}
function Evenements() {
  const evts = [["12 oct. 2026", "09 h 00", "Place du village", "Assemblée générale ordinaire"], ["08 nov. 2026", "16 h 00", "Siège de la mutuelle", "Réunion du bureau élargi"], ["20 déc. 2026", "10 h 00", "Krindjabo", "Journée communautaire de fin d'année"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "evenements",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Agenda",
    title: "Prochains \xE9v\xE9nements"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "evt-row",
    style: {
      display: "grid",
      gridTemplateColumns: "160px 120px 1fr 1.4fr",
      gap: "var(--space-4)",
      padding: "var(--space-4) var(--space-6)",
      background: "var(--surface-sunken)",
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Date"), /*#__PURE__*/React.createElement("span", null, "Heure"), /*#__PURE__*/React.createElement("span", null, "Lieu"), /*#__PURE__*/React.createElement("span", null, "\xC9v\xE9nement")), evts.map(([d, h, l, e], i) => /*#__PURE__*/React.createElement("div", {
    key: e,
    className: "evt-row",
    style: {
      display: "grid",
      gridTemplateColumns: "160px 120px 1fr 1.4fr",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--space-6)",
      borderTop: i ? "1px solid var(--border-subtle)" : "none",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: "var(--text-strong)"
    }
  }, d), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, h), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-muted)"
    }
  }, l), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      color: "var(--text-strong)"
    }
  }, e))))));
}
function AppelSolidarite({
  onJoin
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--section-y-compact) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "cta",
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "var(--space-10)",
      padding: "var(--space-12)",
      background: "var(--surface-brand)",
      color: "var(--text-on-primary)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-brand)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h2)",
      fontWeight: 600,
      letterSpacing: "var(--tracking-heading)"
    }
  }, "La solidarit\xE9 commence par nous"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "58ch",
      fontSize: "var(--text-body)",
      lineHeight: "var(--lh-body)",
      color: "rgba(255,253,250,.85)"
    }
  }, "Chaque geste compte. Chaque membre compte. Ensemble, nous pouvons accompagner ceux qui en ont besoin et contribuer au d\xE9veloppement de notre village.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "accent",
    onClick: onJoin
  }, "Rejoindre la mutuelle"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: "var(--text-on-primary)"
    },
    onClick: () => scrollToId("projets")
  }, "Contribuer \xE0 un projet"))))));
}
function Contact({
  onSent
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      background: "var(--surface-sunken)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    className: "two-col",
    style: {
      display: "grid",
      gridTemplateColumns: "1.1fr .9fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Contact",
    title: "Contactez-nous",
    intro: "Une question, une demande d'information ou un projet \xE0 proposer : \xE9crivez au bureau."
  }), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      onSent();
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)",
      marginTop: "var(--space-8)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-card)",
      boxShadow: "var(--shadow-sm)",
      padding: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nom et pr\xE9nom",
    placeholder: "Ex. Kouassi Ama",
    required: true
  }), /*#__PURE__*/React.createElement(Input, {
    label: "T\xE9l\xE9phone",
    placeholder: "00 00 00 00 00",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "phone",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "E-mail",
    placeholder: "nom@exemple.com",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "mail",
      s: 18
    })
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Sujet",
    placeholder: "Objet de votre message"
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    multiline: true,
    rows: 5,
    placeholder: "\xC9crivez votre message ici.",
    required: true
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    style: {
      alignSelf: "flex-start"
    }
  }, "Envoyer le message"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-5)"
    }
  }, [["map-pin", "Siège", "Place du village, Krindjabo, sous-préfecture de Maféré, Aboisso"], ["phone", "Téléphone", "+225 07 07 45 12 88"], ["mail", "E-mail", "contact@mutuelle-krindjabo.ci"], ["clock", "Permanence", "Samedi de 9 h à 13 h, au siège"]].map(([ic, t, v]) => /*#__PURE__*/React.createElement(Card, {
    key: t,
    padding: "var(--space-5)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: ic
    }),
    eyebrow: t,
    title: v
  })))));
}
function Localisation() {
  const src = "https://www.openstreetmap.org/export/embed.html?bbox=-3.36,5.33,-3.10,5.51&layer=mapnik&marker=5.4167,-3.2333";
  return /*#__PURE__*/React.createElement("section", {
    id: "localisation",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Localisation",
    align: "center",
    title: "Krindjabo, notre terre commune"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-8)",
      borderRadius: "var(--radius-media)",
      overflow: "hidden",
      border: "1px solid var(--border-default)",
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement("iframe", {
    title: "Carte de Krindjabo",
    src: src,
    loading: "lazy",
    style: {
      display: "block",
      width: "100%",
      height: 420,
      border: "none"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      marginTop: "var(--space-3)",
      fontSize: "var(--text-xs)",
      color: "var(--text-subtle)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "Krindjabo, sous-pr\xE9fecture de Maf\xE9r\xE9, d\xE9partement d'Aboisso"), /*#__PURE__*/React.createElement("a", {
    href: "https://www.openstreetmap.org/?mlat=5.4167&mlon=-3.2333#map=12/5.4167/-3.2333",
    target: "_blank",
    rel: "noopener"
  }, "Voir en plein \xE9cran \xB7 \xA9 OpenStreetMap contributors")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "var(--space-8) auto 0",
      maxWidth: "52ch",
      textAlign: "center",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      lineHeight: "var(--lh-heading)",
      color: "var(--text-strong)"
    }
  }, "\xAB Peu importe o\xF9 nous vivons, Krindjabo reste notre maison et notre patrimoine commun. \xBB")));
}
Object.assign(window, {
  Compteur,
  NosMembres,
  Adhesion,
  Actualites,
  Evenements,
  AppelSolidarite,
  Contact,
  Localisation,
  CHIFFRES,
  ACTUALITES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/SectionsCommunity.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/SectionsIntro.jsx
try { (() => {
function Hero({
  onJoin
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "accueil",
    style: {
      position: "relative",
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      padding: "var(--space-20) 0 var(--space-24)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "grid",
      gridTemplateColumns: "1.05fr .95fr",
      gap: "var(--space-16)",
      alignItems: "center"
    },
    className: "hero-grid"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 8,
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--ochre-300)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 2,
      background: "currentColor",
      borderRadius: 2
    }
  }), "Solidarit\xE9 \xB7 Entraide \xB7 D\xE9veloppement"), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-display-2)",
      fontWeight: 600,
      lineHeight: "var(--lh-tight)",
      letterSpacing: "var(--tracking-display)",
      fontVariationSettings: "var(--fraunces-wonk)",
      textTransform: "uppercase"
    }
  }, "Ensemble pour Krindjabo"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: "52ch",
      fontSize: "var(--text-lead)",
      lineHeight: "var(--lh-body)",
      color: "rgba(253,251,247,.82)"
    }
  }, "Une communaut\xE9 unie par ses racines, sa solidarit\xE9 et son engagement pour le d\xE9veloppement de son village."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => scrollToId("mutuelle"),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      n: "arrow-right"
    })
  }, "D\xE9couvrir la mutuelle"), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    variant: "ghost",
    style: {
      color: "var(--text-on-dark)"
    },
    onClick: () => scrollToId("actions")
  }, "Nos actions")))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement(Photo, {
    tone: "dark",
    label: "Image du village ou d'une rencontre communautaire \xE0 fournir",
    height: 420
  }))));
}
function QuiSommesNous() {
  return /*#__PURE__*/React.createElement("section", {
    id: "mutuelle",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    className: "two-col",
    style: {
      display: "grid",
      gridTemplateColumns: ".95fr 1.05fr",
      gap: "var(--space-16)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(Photo, {
    label: "Photo de groupe \xE0 fournir",
    height: 400
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Qui sommes-nous",
    title: "La Mutuelle de Krindjabo",
    intro: "La mutuelle est un espace de solidarit\xE9 qui r\xE9unit les fils, filles, familles et sympathisants de Krindjabo, au village comme ailleurs."
  }), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: 0,
      padding: 0,
      listStyle: "none",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-3) var(--space-6)"
    }
  }, ["S'entraider", "Se soutenir", "Partager les moments importants de la vie", "Contribuer au développement de Krindjabo"].map(t => /*#__PURE__*/React.createElement("li", {
    key: t,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontSize: "var(--text-body)",
      color: "var(--text-muted)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: "check",
    s: 18,
    style: {
      marginTop: 3,
      color: "var(--green-600)"
    }
  }), t))), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: "var(--space-6)",
      background: "var(--surface-brand-soft)",
      borderRadius: "var(--radius-card)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      lineHeight: "var(--lh-heading)",
      color: "var(--green-800)"
    }
  }, "\xAB Quand l'un de nous traverse une \xE9preuve, nous sommes l\xE0. Quand l'un de nous conna\xEEt un moment de joie, nous sommes l\xE0 aussi. \xBB")))));
}
function MissionVision() {
  const piliers = [["handshake", "Entraide"], ["heart-handshake", "Solidarité"], ["sprout", "Développement"], ["users", "Fraternité"]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--surface-sunken)",
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-16)"
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    className: "two-col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-12)",
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Notre mission",
    title: "Une communaut\xE9 o\xF9 chacun peut compter sur les autres",
    intro: "Cr\xE9er une communaut\xE9 solidaire o\xF9 chaque membre peut compter sur les autres, tout en contribuant collectivement au d\xE9veloppement durable de Krindjabo."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-4)"
    }
  }, piliers.map(([ic, t], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 80
  }, /*#__PURE__*/React.createElement(Card, {
    padding: "var(--space-5)",
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: ic
    }),
    title: t,
    style: {
      height: "100%"
    }
  })))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-12)",
      background: "var(--surface-card)",
      border: "1px solid var(--border-subtle)",
      borderRadius: "var(--radius-2xl)",
      boxShadow: "var(--shadow-sm)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Notre vision",
    align: "center",
    title: "Une communaut\xE9 forte, solidaire et engag\xE9e",
    intro: "Faire de Krindjabo une communaut\xE9 o\xF9 les g\xE9n\xE9rations pr\xE9sentes et futures travaillent ensemble pour construire un avenir meilleur."
  }), /*#__PURE__*/React.createElement("div", {
    className: "timeline",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr auto 1fr auto 1fr",
      alignItems: "center",
      gap: "var(--space-4)"
    }
  }, [["Aujourd'hui", "Nos racines et nos familles"], ["Ensemble", "Nos actions communes"], ["Demain", "Un village développé"]].map(([t, s], i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: t
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: "var(--space-6)",
      background: i === 1 ? "var(--surface-brand)" : "var(--surface-brand-soft)",
      color: i === 1 ? "var(--text-on-primary)" : "var(--green-800)",
      borderRadius: "var(--radius-lg)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h3)",
      fontWeight: 600
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-sm)",
      opacity: .85,
      marginTop: 4
    }
  }, s)), i < 2 ? /*#__PURE__*/React.createElement(Icon, {
    n: "arrow-right",
    s: 22,
    style: {
      color: "var(--clay-600)",
      justifySelf: "center"
    }
  }) : null)))))));
}
const VALEURS = [["handshake", "Solidarité", "Être présents les uns pour les autres dans les moments importants de la vie."], ["heart", "Entraide", "Soutenir les membres lorsqu'ils rencontrent des difficultés."], ["sprout", "Développement", "Contribuer à l'amélioration des conditions de vie et au développement du village."], ["users", "Fraternité", "Renforcer les liens entre les familles et les générations."], ["home", "Attachement au village", "Préserver le lien avec Krindjabo, même lorsque les membres vivent ailleurs."], ["hand-heart", "Respect", "Valoriser les personnes, les générations et les traditions de la communauté."]];
function Valeurs() {
  return /*#__PURE__*/React.createElement("section", {
    id: "valeurs",
    style: {
      padding: "var(--section-y) 0"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Nos valeurs",
    align: "center",
    title: "Ce qui nous tient ensemble",
    intro: "Six principes port\xE9s par le bureau et par chaque membre, au village comme dans la diaspora."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid-3",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)",
      marginTop: "var(--space-10)"
    }
  }, VALEURS.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i % 3 * 90
  }, /*#__PURE__*/React.createElement(Card, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: ic
    }),
    title: t,
    interactive: true,
    style: {
      height: "100%"
    }
  }, d))))));
}
Object.assign(window, {
  Hero,
  QuiSommesNous,
  MissionVision,
  Valeurs,
  VALEURS
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/SectionsIntro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/site-vitrine/Shell.jsx
try { (() => {
const {
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  Wordmark,
  SectionHeading
} = window.MutuelleDeKrindjaboDesignSystem_3c18fd;
const Icon = ({
  n,
  s = 20,
  style
}) => /*#__PURE__*/React.createElement("i", {
  "data-lucide": n,
  style: {
    width: s,
    height: s,
    display: "inline-flex",
    flex: "0 0 auto",
    ...style
  }
});
function useIcons() {
  React.useEffect(() => {
    window.lucide && window.lucide.createIcons();
  });
}
const Container = ({
  children,
  narrow = false,
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    width: "100%",
    maxWidth: narrow ? "var(--container-narrow)" : "var(--container-max)",
    margin: "0 auto",
    padding: "0 var(--space-8)",
    ...style
  }
}, children);

/* Apparition douce au défilement — 520ms, easing sortant, neutralisée si prefers-reduced-motion. */
function Reveal({
  children,
  delay = 0,
  style
}) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: .12,
      rootMargin: "0px 0px -40px 0px"
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? "none" : "translateY(18px)",
      transition: `opacity var(--duration-reveal) var(--ease-out) ${delay}ms, transform var(--duration-reveal) var(--ease-out) ${delay}ms`,
      ...style
    }
  }, children);
}

/* Emplacement image : aucune photographie n'a été fournie par la mutuelle. */
const Photo = ({
  label = "Photo à fournir",
  height = 280,
  radius = "var(--radius-media)",
  tone = "light",
  style
}) => /*#__PURE__*/React.createElement("div", {
  style: {
    height,
    borderRadius: radius,
    background: tone === "dark" ? "repeating-linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.05) 12px,rgba(255,255,255,.1) 12px,rgba(255,255,255,.1) 24px)" : "repeating-linear-gradient(135deg,var(--sand-100),var(--sand-100) 12px,var(--sand-200) 12px,var(--sand-200) 24px)",
    border: `1px solid ${tone === "dark" ? "rgba(253,251,247,.22)" : "var(--border-default)"}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 12px",
    color: tone === "dark" ? "rgba(253,251,247,.6)" : "var(--text-subtle)",
    fontSize: "var(--text-xs)",
    fontWeight: 600,
    letterSpacing: ".08em",
    textTransform: "uppercase",
    ...style
  }
}, label);
const NAV = [{
  id: "mutuelle",
  label: "La Mutuelle"
}, {
  id: "actions",
  label: "Nos Actions"
}, {
  id: "projets",
  label: "Nos Projets"
}, {
  id: "membres",
  label: "Nos Membres"
}, {
  id: "adhesion",
  label: "Adhésions & Cotisations"
}, {
  id: "actualites",
  label: "Actualités"
}, {
  id: "contact",
  label: "Contact"
}];
function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset - 76,
    behavior: "smooth"
  });
}
function Header({
  onJoin
}) {
  const [open, setOpen] = React.useState(false);
  const [compact, setCompact] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setCompact(window.pageYOffset > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const go = id => {
    setOpen(false);
    scrollToId(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(253,251,247,.92)",
      backdropFilter: "blur(10px)",
      borderBottom: `1px solid ${compact ? "var(--border-default)" : "var(--border-subtle)"}`,
      transition: "border-color var(--duration-base) var(--ease-standard)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: 76,
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    },
    style: {
      textDecoration: "none",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "site-nav",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-5)",
      flexWrap: "nowrap"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontSize: "var(--text-sm)",
      fontWeight: 500,
      color: "var(--text-body)",
      textDecoration: "none",
      whiteSpace: "nowrap",
      paddingBottom: 2,
      borderBottom: "2px solid transparent"
    },
    onMouseEnter: e => {
      e.currentTarget.style.color = "var(--text-brand)";
      e.currentTarget.style.borderBottomColor = "var(--border-brand)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.color = "var(--text-body)";
      e.currentTarget.style.borderBottomColor = "transparent";
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "site-actions",
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-2)",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "ghost",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "lock",
      s: 16
    })
  }, "Espace Membres"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: onJoin
  }, "Rejoindre la mutuelle")), /*#__PURE__*/React.createElement("span", {
    className: "site-burger",
    style: {
      display: "none"
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      n: open ? "x" : "menu",
      s: 22
    }),
    label: "Menu",
    onClick: () => setOpen(!open)
  }))), open ? /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--border-subtle)",
      background: "var(--surface-page)"
    }
  }, /*#__PURE__*/React.createElement(Container, {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)",
      padding: "var(--space-6) var(--space-8)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    href: `#${n.id}`,
    onClick: e => {
      e.preventDefault();
      go(n.id);
    },
    style: {
      fontSize: "var(--text-body)",
      fontWeight: 600,
      color: "var(--text-strong)",
      textDecoration: "none"
    }
  }, n.label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      paddingTop: "var(--space-2)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    fullWidth: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      n: "lock",
      s: 16
    })
  }, "Espace Membres"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => {
      setOpen(false);
      onJoin();
    }
  }, "Rejoindre la mutuelle")))) : null);
}
function Footer({
  onJoin
}) {
  const cols = [["Navigation", ["Accueil", "La Mutuelle", "Nos Actions", "Nos Projets", "Nos Réalisations", "Actualités", "Événements", "Contact"]], ["Nos valeurs", ["Solidarité", "Entraide", "Fraternité", "Développement", "Respect"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--surface-dark)",
      color: "var(--text-on-dark)",
      paddingTop: "var(--space-16)",
      paddingBottom: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement("div", {
    className: "footer-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "1.5fr 1fr 1fr 1.2fr",
      gap: "var(--space-10)",
      paddingBottom: "var(--space-12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "md",
    tone: "light"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-h4)",
      lineHeight: "var(--lh-heading)",
      color: "var(--ochre-300)",
      maxWidth: "26ch"
    }
  }, "Unis par nos racines, engag\xE9s pour notre communaut\xE9."), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    size: "sm",
    style: {
      alignSelf: "flex-start"
    },
    onClick: onJoin
  }, "Rejoindre la mutuelle")), cols.map(([title, links]) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--ochre-300)"
    }
  }, title), links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: "var(--text-sm)",
      color: "rgba(253,251,247,.78)",
      textDecoration: "none"
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--text-eyebrow)",
      fontWeight: 700,
      letterSpacing: "var(--tracking-eyebrow)",
      textTransform: "uppercase",
      color: "var(--ochre-300)"
    }
  }, "Nous joindre"), [["map-pin", "Place du village, Krindjabo, Maféré, Aboisso"], ["phone", "+225 07 07 45 12 88"], ["mail", "contact@mutuelle-krindjabo.ci"]].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: "flex",
      gap: 10,
      alignItems: "flex-start",
      fontSize: "var(--text-sm)",
      color: "rgba(253,251,247,.78)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: ic,
    s: 16,
    style: {
      marginTop: 3,
      color: "var(--ochre-300)"
    }
  }), t)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-2)",
      marginTop: "var(--space-2)"
    }
  }, ["facebook", "instagram", "youtube"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => e.preventDefault(),
    "aria-label": s,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: 38,
      height: 38,
      borderRadius: "var(--radius-pill)",
      border: "1px solid rgba(253,251,247,.22)",
      color: "rgba(253,251,247,.8)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    n: s,
    s: 18
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(253,251,247,.14)",
      paddingTop: "var(--space-6)",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-3)",
      fontSize: "var(--text-xs)",
      color: "rgba(253,251,247,.55)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Mutuelle de Krindjabo \u2014 Tous droits r\xE9serv\xE9s"), /*#__PURE__*/React.createElement("span", null, "Solidarit\xE9 \xB7 Entraide \xB7 D\xE9veloppement"))));
}
Object.assign(window, {
  Icon,
  useIcons,
  Container,
  Photo,
  Reveal,
  NAV,
  scrollToId,
  Header,
  Footer,
  Button,
  IconButton,
  Card,
  Badge,
  Tag,
  Input,
  Select,
  Checkbox,
  Radio,
  Switch,
  Tabs,
  Dialog,
  Toast,
  Tooltip,
  Wordmark,
  SectionHeading
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/site-vitrine/Shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
