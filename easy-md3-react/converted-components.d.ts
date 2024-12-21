import { Chip } from "@material/web/chips/internal/chip";
import { DialogAnimation } from "@material/web/dialog/internal/animations";
import { SurfacePositionTarget } from "@material/web/menu/internal/controllers/surfacePositionController";
import { TypeaheadController } from "@material/web/menu/internal/controllers/typeaheadController";
import { ListItem, Menu, MenuItem } from "@material/web/menu/menu";
import { SelectOption } from "@material/web/select/select-option";
import { Tab } from "@material/web/tabs/internal/tab";
import { ComponentProps } from "react";

/**
 * Temporarily substitute div for type
 */

/**
 * Props of Button
 * {@link https://material-web.dev/components/button/#api Docs}.
 */
export type MdButtonProps = {
  disabled?: boolean;
  "soft-disabled"?: boolean;
  href?: string;
  target?: string;
  "trailing-icon"?: boolean;
  hasIcon?: boolean;
  type?: string;
  value?: string;
  name?: string;
  form?: HTMLFormElement;
};
export type MdElevatedButtonProps = MdButtonProps & ComponentProps<"button">;
export type MdFilledButtonProps = MdButtonProps & ComponentProps<"button">;
export type MdFilledTonalButtonProps = MdButtonProps & ComponentProps<"button">;
export type MdOutlinedButtonProps = MdButtonProps & ComponentProps<"button">;
export type MdTextButtonProps = MdButtonProps & ComponentProps<"button">;

/**
 * Props of Checkbox
 * {@link https://material-web.dev/components/checkbox/#api Docs}.
 */
export type MdCheckboxProps = {
  checked?: boolean;
  indeterminate?: boolean;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  name?: string;
} & ComponentProps<"div">;

/**
 * Common props for chip.
 */
type ChipProps = {
  elevated?: boolean;
  href?: string;
  target?: string;
  disabled?: boolean;
  "always-focusable"?: boolean;
  label?: string;
  "has-icon"?: boolean;
};

/**
 * Props of AssistChip
 * {@link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater Docs}.
 */
export type MdAssistChipProps = ChipProps & ComponentProps<"div">;

/**
 * Props of FilterChip
 * {@link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater Docs}.
 */
export type MdFilterChipProps = ChipProps & {
  handleTrailingActionFocus?: () => void;
  ariaLabelRemove?: string;
} & ComponentProps<"div">;

/**
 * Props of InputChip
 * {@link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater Docs}.
 */
export type MdInputChipProps = ChipProps & {
  handleTrailingActionFocus?: () => void;
  ariaLabelRemove?: string;
} & ComponentProps<"div">;

/**
 * Props of SuggestopmChip
 * {@link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater Docs}.
 */
export type MdSuggestionChipProps = ChipProps & ComponentProps<"div">;

/**
 * Props of Chipset
 * {@link https://material-web.dev/components/chip/#mdchipset-lessmd-chip-setgreater Docs}.
 */
export type MdChipSetProps = { chips?: Chip[] } & ComponentProps<"div">;

/**
 * Props of Dialog
 * {@link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater Docs}
 */
export type MdDialogProps = {
  quick?: boolean;
  retuarnValue?: string;
  type?: string;
  "no-focus-trap"?: boolean;
  open?: boolean;
  getOpenAnimation?: () => DialogAnimation;
  getCloseAnimation?: () => DialogAnimation;
} & ComponentProps<"div">;

export type MdDividerProps = ComponentProps<"div">;
export type MdElevationProps = ComponentProps<"div">;

/**
 * Fab props
 * {@link https://material-web.dev/components/fab/#mdfab-lessmd-fabgreater Docs}
 */
type FabProps = {
  variant?: string;
  size?: string;
  label?: string;
  lowerd?: string;
};
export type MdBrandedFabProps = FabProps & ComponentProps<"button">;
export type MdFabProps = FabProps & ComponentProps<"button">;

/**
 * IconButton props
 * {@link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater Docs}
 */
type IconButtonProps = {
  disabled?: boolean;
  "flip-ion-in-rtl"?: boolean;
  href?: string;
  target?: string;
  "area-label-selected"?: string;
  toggle?: boolean;
  selected?: boolean;
  type?: string;
  value?: string;
  name?: string;
  form?: HTMLFormElement;
  labels?: NodeList;
};
export type MdIconButtonProps = IconButtonProps & ComponentProps<"button">;
export type MdFilledIconButtonProps = IconButtonProps &
  ComponentProps<"button">;
export type MdFilledTonalIconButtonProps = IconButtonProps &
  ComponentProps<"button">;
export type MdOutlinedIconButtonProps = IconButtonProps &
  ComponentProps<"button">;

export type MdFilledFieldProps = ComponentProps<"div">;
export type MdOutlinedFieldProps = ComponentProps<"div">;
export type MdFocusRingProps = ComponentProps<"div">;
export type MdIconProps = ComponentProps<"div">;

/**
 * List props
 * {@link https://material-web.dev/components/list/#mdlist-lessmd-listgreater Docs}
 */
export type MdListProps = { items?: ListItem[] } & ComponentProps<"div">;

/**
 * List Item props
 * {@link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater Docs}
 */
export type MdListItemProps = {
  disabled?: boolean;
  type?: string;
  href?: string;
  target?: string;
} & ComponentProps<"div">;

/**
 * Menu props
 * {@link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater Docs}
 */
export type MdMenuProps = {
  anchor?: string;
  positioning?: string;
  quick?: boolean;
  hasOverflow?: boolean;
  open?: boolean;
  "x-offset"?: number;
  "y-offset"?: number;
  "typeahead-delay"?: number;
  "anchor-corner"?: string;
  "menu-corner"?: string;
  "no-horizontal-flip"?: boolean;
  "no-vertical-flip"?: boolean;
  "stay-open-on-outside-click"?: boolean;
  "stay-open-on-focusout"?: boolean;
  "skip-restore-focus"?: boolean;
  "default-focus"?: string;
  "no-navigation-wrap"?: boolean;
  isSubmenu?: boolean;
  typeaheadController?: TypeaheadController;
  anchorElement?: HTMLElement & Partial<SurfacePositionTarget>;
  items?: MenuItem[];
} & ComponentProps<"div">;

/**
 * Menu item props
 * {@link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater Docs}
 */
export type MdMenuItemProps = {
  disabled?: boolean;
  type?: string;
  href?: string;
  target?: string;
  "keep-open"?: boolean;
  selected?: boolean;
  typeaheadText?: string;
} & ComponentProps<"div">;

/**
 * Submenu props
 * {@link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater Docs}
 */
export type MdSubMenuProps = {
  "anchor-corner"?: string;
  "menu-corner"?: string;
  "hover-open-delay"?: number;
  "hover-close-delay"?: number;
  "md-sub-menu"?: boolean;
  item?: MenuItem;
  menu?: Menu;
} & ComponentProps<"div">;

/**
 * Progress props
 */
type ProgressProps = {
  max?: number;
  value?: number;
  indeterminate?: boolean;
  "four-color"?: boolean;
};
/**
 * Linear progress props
 * {@link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater Docs}
 */
export type MdLinearProgressProps = ProgressProps & ComponentProps<"div">;

/**
 * Circular progress props
 * {@link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater Docs}
 */
export type MdCircularProgressProps = ProgressProps & {
  buffer?: number;
} & ComponentProps<"div">;

/**
 * Radio props
 * {@link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater Docs }
 */
export type MdRadioProps = {
  required?: boolean;
  value?: string;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
} & ComponentProps<"input">;

/**
 * Ripple props
 * {@link https://material-web.dev/components/ripple/#mdripple-lessmd-ripplegreater Docs}
 */
export type MdRippleProps = {
  disabled?: boolean;
  htmlFor?: string;
  control?: HTMLElement;
} & ComponentProps<"div">;

/**
 * Select props
 * {@link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater Docs}
 */
type MdSelectProps = {
  quick?: boolean;
  required?: boolean;
  "error-text"?: string;
  label?: string;
  "no-asterisk"?: boolean;
  "supporting-text"?: string;
  error?: boolean;
  "menu-positioning"?: string;
  "clamp-menu-width"?: boolean;
  "typeahead-delay"?: number;
  "has-leading-icon"?: boolean;
  "display-text"?: string;
  "menu-align"?: string;
  value?: string;
  "selected-index"?: number;
  disabled?: boolean;
  name?: string;
  options?: SelectOption[];
  selectedOptions?: SelectOption[];
};
export type MdFilledSelectProps = MdSelectProps & ComponentProps<"select">;
export type MdOutlinedSelectProps = MdSelectProps & ComponentProps<"select">;

/**
 * Select option props
 * {@link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater Docs}
 */
export type MdSelectOptionProps = {
  disabled?: boolean;
  selected?: boolean;
  value?: string;
  type?: string;
  typeaheadText?: string;
  displayText?: string;
} & ComponentProps<"div">;

/**
 * Slider props
 * {@link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater Docs}
 */
export type MdSliderProps = {
  min?: number;
  max?: number;
  value?: number;
  "value-start"?: number;
  "value-end"?: number;
  "value-label"?: string;
  "value-label-start"?: string;
  "value-label-end"?: string;
  "aria-label-start"?: string;
  "aria-valuetext-start"?: string;
  "aria-label-end"?: string;
  "aria-valuetext-end"?: string;
  step?: number;
  ticks?: boolean;
  labeled?: boolean;
  range?: boolean;
  disabled?: boolean;
  name?: string;
  nameStart?: string;
  nameEnd?: string;
} & ComponentProps<"input">;

/**
 * Switch props
 * {@link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater Docs}
 */
export type MdSwitchProps = {
  selected?: boolean;
  icons?: boolean;
  "show-only-selected-icon"?: boolean;
  required?: boolean;
  value?: string;
  disabled?: boolean;
  name?: string;
} & ComponentProps<"div">;

/**
 * Tabs props
 * {@link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater Docs}
 */
export type MdTabsProps = {
  "auto-activate"?: boolean;
  "active-tab-index"?: number;
  tabs?: Tab[];
  activeTab?: Tab;
} & ComponentProps<"div">;

/**
 * PrimaryTab props
 * {@link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater Docs}
 */
export type MdPrimaryTabProps = {
  "inline-icon"?: boolean;
  "md-tab"?: boolean;
  active?: boolean;
  "has-icon"?: boolean;
  "icon-only"?: boolean;
  selected?: boolean;
} & ComponentProps<"div">;

/**
 * SecondaryTab props
 * {@link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater Docs}
 */
export type MdSecondaryTabProps = {
  "md-tab"?: boolean;
  active?: boolean;
  "has-icon"?: boolean;
  "icon-only"?: boolean;
  selected?: boolean;
} & ComponentProps<"div">;

/**
 * Textfield props
 * {@link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater Docs}
 */
type TextFieldProps = {
  error?: boolean;
  "error-text"?: string;
  label?: string;
  "no-asterisk"?: boolean;
  required?: boolean;
  value?: string;
  "prefix-text"?: string;
  "suffix-text"?: string;
  "has-leading-icon"?: boolean;
  "has-trailing-icon"?: boolean;
  "supporting-text"?: string;
  "text-direction"?: string;
  rows?: number;
  cols?: number;
  inputmode?: string;
  max?: string;
  maxlength?: number;
  min?: string;
  minlength?: number;
  "no-spinner"?: boolean;
  pattern?: string;
  placeholder?: string;
  readonly?: boolean;
  multiple?: boolean;
  step?: string;
  type?: string;
  autocomplete?: string;
  disabled?: boolean;
  name?: string;
  selectionDirection?: string;
  selectionEnd?: number;
  selectionStart?: number;
  valueAsNumber?: number;
  valueAsDate?: Date;
};

export type MdFilledTextFieldProps = TextFieldProps & ComponentProps<"input">;
export type MdOutlinedTextFieldProps = TextFieldProps & ComponentProps<"input">;
