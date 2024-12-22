import * as react from 'react';
import { ComponentProps, ReactNode } from 'react';
import { Initializer, LitElement } from 'lit';
import * as _material_web_tabs_internal_tab from '@material/web/tabs/internal/tab';
import { Tab } from '@material/web/tabs/internal/tab';
import * as _material_web_select_select_option from '@material/web/select/select-option';
import { SelectOption } from '@material/web/select/select-option';
import * as _material_web_menu_internal_controllers_surfacePositionController from '@material/web/menu/internal/controllers/surfacePositionController';
import { SurfacePositionTarget } from '@material/web/menu/internal/controllers/surfacePositionController';
import * as _material_web_menu_internal_controllers_typeaheadController from '@material/web/menu/internal/controllers/typeaheadController';
import { TypeaheadController } from '@material/web/menu/internal/controllers/typeaheadController';
import * as _material_web_menu_menu from '@material/web/menu/menu';
import { ListItem, MenuItem, Menu } from '@material/web/menu/menu';
import * as _material_web_dialog_internal_animations from '@material/web/dialog/internal/animations';
import { DialogAnimation } from '@material/web/dialog/internal/animations';
import * as _material_web_chips_internal_chip from '@material/web/chips/internal/chip';
import { Chip } from '@material/web/chips/internal/chip';
import * as react_jsx_runtime from 'react/jsx-runtime';

type LitElementExtended = new (...args: any[]) => LitElement;
interface MaterialWebLitElement extends LitElementExtended {
    addInitializer(initializer: Initializer): void;
}
/**
 * Get a ReactElement in react from a module that is a Lit element
 * @param module
 * @returns
 */
declare function useLit<T, U extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = React.JSXElementConstructor<T>>(module: MaterialWebLitElement): ({ ...props }: ComponentProps<U> & T) => react.ReactElement<U, string | react.JSXElementConstructor<any>>;
/**
 * Get a ReactElement without react from a module that is a Lit element. (Doesn't use state and useEffect)
 * @param module
 * @returns
 */
declare function litToReact<T, U extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any> = React.JSXElementConstructor<T>>(module: MaterialWebLitElement): (props: ComponentProps<U> & T) => react.ReactElement<U, string | react.JSXElementConstructor<any>>;

/**
 * Temporarily substitute div for type
 */
/**
 * Props of Button
 * {@link https://material-web.dev/components/button/#api Docs}.
 */
type MdButtonProps = {
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
type MdElevatedButtonProps = MdButtonProps & ComponentProps<"button">;
type MdFilledButtonProps = MdButtonProps & ComponentProps<"button">;
type MdFilledTonalButtonProps = MdButtonProps & ComponentProps<"button">;
type MdOutlinedButtonProps = MdButtonProps & ComponentProps<"button">;
type MdTextButtonProps = MdButtonProps & ComponentProps<"button">;
/**
 * Props of Checkbox
 * {@link https://material-web.dev/components/checkbox/#api Docs}.
 */
type MdCheckboxProps = {
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
type MdAssistChipProps = ChipProps & ComponentProps<"div">;
/**
 * Props of FilterChip
 * {@link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater Docs}.
 */
type MdFilterChipProps = ChipProps & {
    handleTrailingActionFocus?: () => void;
    ariaLabelRemove?: string;
} & ComponentProps<"div">;
/**
 * Props of InputChip
 * {@link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater Docs}.
 */
type MdInputChipProps = ChipProps & {
    handleTrailingActionFocus?: () => void;
    ariaLabelRemove?: string;
} & ComponentProps<"div">;
/**
 * Props of SuggestopmChip
 * {@link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater Docs}.
 */
type MdSuggestionChipProps = ChipProps & ComponentProps<"div">;
/**
 * Props of Chipset
 * {@link https://material-web.dev/components/chip/#mdchipset-lessmd-chip-setgreater Docs}.
 */
type MdChipSetProps = {
    chips?: Chip[];
} & ComponentProps<"div">;
/**
 * Props of Dialog
 * {@link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater Docs}
 */
type MdDialogProps = {
    quick?: boolean;
    retuarnValue?: string;
    type?: string;
    "no-focus-trap"?: boolean;
    open?: boolean;
    getOpenAnimation?: () => DialogAnimation;
    getCloseAnimation?: () => DialogAnimation;
} & ComponentProps<"div">;
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
type MdBrandedFabProps = FabProps & ComponentProps<"button">;
type MdFabProps = FabProps & ComponentProps<"button">;
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
type MdIconButtonProps = IconButtonProps & ComponentProps<"button">;
type MdFilledIconButtonProps = IconButtonProps & ComponentProps<"button">;
type MdFilledTonalIconButtonProps = IconButtonProps & ComponentProps<"button">;
type MdOutlinedIconButtonProps = IconButtonProps & ComponentProps<"button">;
/**
 * List props
 * {@link https://material-web.dev/components/list/#mdlist-lessmd-listgreater Docs}
 */
type MdListProps = {
    items?: ListItem[];
} & ComponentProps<"div">;
/**
 * List Item props
 * {@link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater Docs}
 */
type MdListItemProps = {
    disabled?: boolean;
    type?: string;
    href?: string;
    target?: string;
} & ComponentProps<"div">;
/**
 * Menu props
 * {@link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater Docs}
 */
type MdMenuProps = {
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
type MdMenuItemProps = {
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
type MdSubMenuProps = {
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
type MdLinearProgressProps = ProgressProps & ComponentProps<"div">;
/**
 * Circular progress props
 * {@link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater Docs}
 */
type MdCircularProgressProps = ProgressProps & {
    buffer?: number;
} & ComponentProps<"div">;
/**
 * Radio props
 * {@link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater Docs }
 */
type MdRadioProps = {
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
type MdRippleProps = {
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
type MdFilledSelectProps = MdSelectProps & ComponentProps<"select">;
type MdOutlinedSelectProps = MdSelectProps & ComponentProps<"select">;
/**
 * Select option props
 * {@link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater Docs}
 */
type MdSelectOptionProps = {
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
type MdSliderProps = {
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
type MdSwitchProps = {
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
type MdTabsProps = {
    "auto-activate"?: boolean;
    "active-tab-index"?: number;
    tabs?: Tab[];
    activeTab?: Tab;
} & ComponentProps<"div">;
/**
 * PrimaryTab props
 * {@link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater Docs}
 */
type MdPrimaryTabProps = {
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
type MdSecondaryTabProps = {
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
type MdFilledTextFieldProps = TextFieldProps & ComponentProps<"input">;
type MdOutlinedTextFieldProps = TextFieldProps & ComponentProps<"input">;

declare const MdElevatedButton: (props: MdButtonProps & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdElevatedButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilledButton: (props: MdButtonProps & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilledTonalButton: (props: MdButtonProps & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledTonalButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedButton: (props: MdButtonProps & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdTextButton: (props: MdButtonProps & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdTextButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdCheckbox: (props: {
    checked?: boolean;
    indeterminate?: boolean;
    required?: boolean;
    value?: string;
    disabled?: boolean;
    name?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdCheckboxProps>, string | react.JSXElementConstructor<any>>;

declare const MdAssistChip: (props: {
    elevated?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    "always-focusable"?: boolean;
    label?: string;
    "has-icon"?: boolean;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdAssistChipProps>, string | react.JSXElementConstructor<any>>;

declare const MdChipSet: (props: {
    chips?: _material_web_chips_internal_chip.Chip[];
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdChipSetProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilterChip: (props: {
    elevated?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    "always-focusable"?: boolean;
    label?: string;
    "has-icon"?: boolean;
} & {
    handleTrailingActionFocus?: () => void;
    ariaLabelRemove?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdFilterChipProps>, string | react.JSXElementConstructor<any>>;

declare const MdInputChip: (props: {
    elevated?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    "always-focusable"?: boolean;
    label?: string;
    "has-icon"?: boolean;
} & {
    handleTrailingActionFocus?: () => void;
    ariaLabelRemove?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdInputChipProps>, string | react.JSXElementConstructor<any>>;

declare const MdSuggestionChip: (props: {
    elevated?: boolean;
    href?: string;
    target?: string;
    disabled?: boolean;
    "always-focusable"?: boolean;
    label?: string;
    "has-icon"?: boolean;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdSuggestionChipProps>, string | react.JSXElementConstructor<any>>;

declare const MdDialog: (props: {
    quick?: boolean;
    retuarnValue?: string;
    type?: string;
    "no-focus-trap"?: boolean;
    open?: boolean;
    getOpenAnimation?: () => _material_web_dialog_internal_animations.DialogAnimation;
    getCloseAnimation?: () => _material_web_dialog_internal_animations.DialogAnimation;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdDialogProps>, string | react.JSXElementConstructor<any>>;
declare const MdDivider: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, string | react.JSXElementConstructor<any>>;
declare const MdElevation: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, string | react.JSXElementConstructor<any>>;

declare const MdBrandedFab: (props: {
    variant?: string;
    size?: string;
    label?: string;
    lowerd?: string;
} & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdBrandedFabProps>, string | react.JSXElementConstructor<any>>;

declare const MdFab: (props: {
    variant?: string;
    size?: string;
    label?: string;
    lowerd?: string;
} & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdFabProps>, string | react.JSXElementConstructor<any>>;
declare const MdFilledField: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, string | react.JSXElementConstructor<any>>;
declare const MdOutlinedField: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, string | react.JSXElementConstructor<any>>;
declare const MdFocusRing: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, string | react.JSXElementConstructor<any>>;
declare const MdIcon: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<react.DetailedHTMLProps<react.HTMLAttributes<HTMLDivElement>, HTMLDivElement>>, string | react.JSXElementConstructor<any>>;

declare const MdFilledIconButton: (props: {
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
} & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledIconButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilledTonalIconButton: (props: {
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
} & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledTonalIconButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdIconButton: (props: {
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
} & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdIconButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedIconButton: (props: {
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
} & react.ClassAttributes<HTMLButtonElement> & react.ButtonHTMLAttributes<HTMLButtonElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedIconButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdListItem: (props: {
    disabled?: boolean;
    type?: string;
    href?: string;
    target?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdListItemProps>, string | react.JSXElementConstructor<any>>;

declare const MdList: (props: {
    items?: _material_web_menu_menu.ListItem[];
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdListProps>, string | react.JSXElementConstructor<any>>;

declare const MdMenuItem: (props: {
    disabled?: boolean;
    type?: string;
    href?: string;
    target?: string;
    "keep-open"?: boolean;
    selected?: boolean;
    typeaheadText?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdMenuItemProps>, string | react.JSXElementConstructor<any>>;

declare const MdMenu: (props: {
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
    typeaheadController?: _material_web_menu_internal_controllers_typeaheadController.TypeaheadController;
    anchorElement?: HTMLElement & Partial<_material_web_menu_internal_controllers_surfacePositionController.SurfacePositionTarget>;
    items?: _material_web_menu_menu.MenuItem[];
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdMenuProps>, string | react.JSXElementConstructor<any>>;

declare const MdSubMenu: (props: {
    "anchor-corner"?: string;
    "menu-corner"?: string;
    "hover-open-delay"?: number;
    "hover-close-delay"?: number;
    "md-sub-menu"?: boolean;
    item?: _material_web_menu_menu.MenuItem;
    menu?: _material_web_menu_menu.Menu;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdSubMenuProps>, string | react.JSXElementConstructor<any>>;

declare const MdCircularProgress: (props: {
    max?: number;
    value?: number;
    indeterminate?: boolean;
    "four-color"?: boolean;
} & {
    buffer?: number;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdCircularProgressProps>, string | react.JSXElementConstructor<any>>;

declare const MdLinearProgress: (props: {
    max?: number;
    value?: number;
    indeterminate?: boolean;
    "four-color"?: boolean;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdLinearProgressProps>, string | react.JSXElementConstructor<any>>;

declare const MdRadio: (props: {
    required?: boolean;
    value?: string;
    checked?: boolean;
    disabled?: boolean;
    name?: string;
} & react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement>) => react.ReactElement<react.JSXElementConstructor<MdRadioProps>, string | react.JSXElementConstructor<any>>;

declare const MdRipple: (props: {
    disabled?: boolean;
    htmlFor?: string;
    control?: HTMLElement;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdRippleProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilledSelect: (props: {
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
    options?: _material_web_select_select_option.SelectOption[];
    selectedOptions?: _material_web_select_select_option.SelectOption[];
} & react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledSelectProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedSelect: (props: {
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
    options?: _material_web_select_select_option.SelectOption[];
    selectedOptions?: _material_web_select_select_option.SelectOption[];
} & react.ClassAttributes<HTMLSelectElement> & react.SelectHTMLAttributes<HTMLSelectElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedSelectProps>, string | react.JSXElementConstructor<any>>;

declare const MdSelectOption: (props: {
    disabled?: boolean;
    selected?: boolean;
    value?: string;
    type?: string;
    typeaheadText?: string;
    displayText?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdSelectOptionProps>, string | react.JSXElementConstructor<any>>;

declare const MdSlider: (props: {
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
} & react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement>) => react.ReactElement<react.JSXElementConstructor<MdSliderProps>, string | react.JSXElementConstructor<any>>;

declare const MdSwitch: (props: {
    selected?: boolean;
    icons?: boolean;
    "show-only-selected-icon"?: boolean;
    required?: boolean;
    value?: string;
    disabled?: boolean;
    name?: string;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdSwitchProps>, string | react.JSXElementConstructor<any>>;

declare const MdPrimaryTab: (props: {
    "inline-icon"?: boolean;
    "md-tab"?: boolean;
    active?: boolean;
    "has-icon"?: boolean;
    "icon-only"?: boolean;
    selected?: boolean;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdPrimaryTabProps>, string | react.JSXElementConstructor<any>>;

declare const MdSecondaryTab: (props: {
    "md-tab"?: boolean;
    active?: boolean;
    "has-icon"?: boolean;
    "icon-only"?: boolean;
    selected?: boolean;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdSecondaryTabProps>, string | react.JSXElementConstructor<any>>;

declare const MdTabs: (props: {
    "auto-activate"?: boolean;
    "active-tab-index"?: number;
    tabs?: _material_web_tabs_internal_tab.Tab[];
    activeTab?: _material_web_tabs_internal_tab.Tab;
} & react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdTabsProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilledTextField: (props: {
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
} & react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledTextFieldProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedTextField: (props: {
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
} & react.ClassAttributes<HTMLInputElement> & react.InputHTMLAttributes<HTMLInputElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedTextFieldProps>, string | react.JSXElementConstructor<any>>;

type TypographyProps<T extends keyof JSX.IntrinsicElements> = {
    /**
     * Compoent name
     */
    component: T;
    typescale?: "display" | "headline" | "title" | "body" | "label";
    size?: "small" | "medium" | "large";
} & ComponentProps<T>;
/**
 * Typography helps make writing legible and beautiful.
 * {@link https://material-web.dev/theming/typography/ Docs}
 * @param param0
 * @returns
 */
declare function Typography<T extends keyof JSX.IntrinsicElements>({ component, typescale, size, className, ...props }: TypographyProps<T>): react.ReactElement<{
    className: string;
} & Omit<TypographyProps<T>, "className" | "size" | "component" | "typescale">, string | react.JSXElementConstructor<any>>;

type ColorPalette = {
  "0": string;
  "5": string;
  "10": string;
  "15": string;
  "20": string;
  "25": string;
  "30": string;
  "35": string;
  "40": string;
  "50": string;
  "60": string;
  "70": string;
  "80": string;
  "90": string;
  "95": string;
  "98": string;
  "99": string;
  "100": string;
  [key: string]: string;
};

type ColorSchemes = {
  [keys: string]: string;
  primary: string;
  surfaceTint: string;
  onPrimary: string;
  primaryContainer: string;
  onPrimaryContainer: string;
  secondary: string;
  onSecondary: string;
  secondaryContainer: string;
  onSecondaryContainer: string;
  tertiary: string;
  onTertiary: string;
  tertiaryContainer: string;
  onTertiaryContainer: string;
  error: string;
  onError: string;
  errorContainer: string;
  onErrorContainer: string;
  background: string;
  onBackground: string;
  surface: string;
  onSurface: string;
  surfaceVariant: string;
  onSurfaceVariant: string;
  outline: string;
  outlineVariant: string;
  shadow: string;
  scrim: string;
  inverseSurface: string;
  inverseOnSurface: string;
  inversePrimary: string;
  primaryFixed: string;
  onPrimaryFixed: string;
  primaryFixedDim: string;
  onPrimaryFixedVariant: string;
  secondaryFixed: string;
  onSecondaryFixed: string;
  secondaryFixedDim: string;
  onSecondaryFixedVariant: string;
  tertiaryFixed: string;
  onTertiaryFixed: string;
  tertiaryFixedDim: string;
  onTertiaryFixedVariant: string;
  surfaceDim: string;
  surfaceBright: string;
  surfaceContainerLowest: string;
  surfaceContainerLow: string;
  surfaceContainer: string;
  surfaceContainerHigh: string;
  surfaceContainerHighest: string;
};

/**
 * It can be generated in [Material theme builder](https://material-foundation.github.io/material-theme-builder/)
 */
type MaterialTheme = {
  description: string;
  seed: string;
  coreColors: {
    primary: string;
  };
  extendedColors: string[];
  schemes: {
    light: ColorSchemes;
    "light-medium-contrast": ColorSchemes;
    "light-high-contrast": ColorSchemes;
    dark: ColorSchemes;
    "dark-medium-contrast": ColorSchemes;
    "dark-high-contrast": ColorSchemes;
  };
  palettes: {
    primary: ColorPalette;
    secondary: ColorPalette;
    tertiary: ColorPalette;
    neutral: ColorPalette;
    "neutral-variant": ColorPalette;
    [key: string]: ColorPalette;
  };
};

type Schemes = "light" | "light-medium-contrast" | "light-high-contrast" | "dark" | "dark-medium-contrast" | "dark-high-contrast";
declare function Theming({ theme, scheme, children, }: {
    theme: MaterialTheme;
    scheme?: Schemes;
    children?: ReactNode;
}): react_jsx_runtime.JSX.Element;
declare function applyTheme(theme: MaterialTheme, { target, scheme, }: {
    target: Element;
    scheme: Schemes;
}): void;

type MdBadgeProps = {} & ComponentProps<"div">;
type MdElevatedCardProps = {} & ComponentProps<"div">;
type MdFilledCardProps = {} & ComponentProps<"div">;
type MdOutlinedCardProps = {} & ComponentProps<"div">;
type MdItemProps = {} & ComponentProps<"div">;
type MdNavigationBarProps = {} & ComponentProps<"div">;
type MdNavigationDrawerModalProps = {} & ComponentProps<"div">;
type MdNavigationDrawerProps = {} & ComponentProps<"div">;
type MdNavigationTabProps = {} & ComponentProps<"div">;
type MdOutlinedSegmentedButtonProps = {} & ComponentProps<"div">;
type MdOutlinedSegmentedButtonSetProps = {} & ComponentProps<"div">;

declare const MdBadge: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdBadgeProps>, string | react.JSXElementConstructor<any>>;

declare const MdElevatedCard: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdElevatedCardProps>, string | react.JSXElementConstructor<any>>;

declare const MdFilledCard: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdFilledCardProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedCard: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedCardProps>, string | react.JSXElementConstructor<any>>;

declare const MdItem: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdItemProps>, string | react.JSXElementConstructor<any>>;

declare const MdNavigationBar: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdNavigationBarProps>, string | react.JSXElementConstructor<any>>;

declare const MdNavigationDrawerModal: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdNavigationDrawerModalProps>, string | react.JSXElementConstructor<any>>;

declare const MdNavigationDrawer: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdNavigationDrawerProps>, string | react.JSXElementConstructor<any>>;

declare const MdNavigationTab: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdNavigationTabProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedSegmentedButton: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedSegmentedButtonProps>, string | react.JSXElementConstructor<any>>;

declare const MdOutlinedSegmentedButtonSet: (props: react.ClassAttributes<HTMLDivElement> & react.HTMLAttributes<HTMLDivElement>) => react.ReactElement<react.JSXElementConstructor<MdOutlinedSegmentedButtonSetProps>, string | react.JSXElementConstructor<any>>;

export { MdAssistChip, MdBadge, MdBrandedFab, MdCheckbox, MdChipSet, MdCircularProgress, MdDialog, MdDivider, MdElevatedButton, MdElevatedCard, MdElevation, MdFab, MdFilledButton, MdFilledCard, MdFilledField, MdFilledIconButton, MdFilledSelect, MdFilledTextField, MdFilledTonalButton, MdFilledTonalIconButton, MdFilterChip, MdFocusRing, MdIcon, MdIconButton, MdInputChip, MdItem, MdLinearProgress, MdList, MdListItem, MdMenu, MdMenuItem, MdNavigationBar, MdNavigationDrawer, MdNavigationDrawerModal, MdNavigationTab, MdOutlinedButton, MdOutlinedCard, MdOutlinedField, MdOutlinedIconButton, MdOutlinedSegmentedButton, MdOutlinedSegmentedButtonSet, MdOutlinedSelect, MdOutlinedTextField, MdPrimaryTab, MdRadio, MdRipple, MdSecondaryTab, MdSelectOption, MdSlider, MdSubMenu, MdSuggestionChip, MdSwitch, MdTabs, MdTextButton, type Schemes, Theming, Typography, type TypographyProps, applyTheme, litToReact, useLit };
