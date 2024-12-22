import { useState, useEffect, createElement } from 'react';
import { MdElevatedButton as MdElevatedButton$1 } from '@material/web/button/elevated-button';
import { MdFilledButton as MdFilledButton$1 } from '@material/web/button/filled-button';
import { MdFilledTonalButton as MdFilledTonalButton$1 } from '@material/web/button/filled-tonal-button';
import { MdOutlinedButton as MdOutlinedButton$1 } from '@material/web/button/outlined-button';
import { MdTextButton as MdTextButton$1 } from '@material/web/button/text-button';
import { MdCheckbox as MdCheckbox$1 } from '@material/web/checkbox/checkbox';
import { MdAssistChip as MdAssistChip$1 } from '@material/web/chips/assist-chip';
import { MdChipSet as MdChipSet$1 } from '@material/web/chips/chip-set';
import { MdFilterChip as MdFilterChip$1 } from '@material/web/chips/filter-chip';
import { MdInputChip as MdInputChip$1 } from '@material/web/chips/input-chip';
import { MdSuggestionChip as MdSuggestionChip$1 } from '@material/web/chips/suggestion-chip';
import { MdDialog as MdDialog$1 } from '@material/web/dialog/dialog';
import { MdDivider as MdDivider$1 } from '@material/web/divider/divider';
import { MdElevation as MdElevation$1 } from '@material/web/elevation/elevation';
import { MdBrandedFab as MdBrandedFab$1 } from '@material/web/fab/branded-fab';
import { MdFab as MdFab$1 } from '@material/web/fab/fab';
import { MdFilledField as MdFilledField$1 } from '@material/web/field/filled-field';
import { MdOutlinedField as MdOutlinedField$1 } from '@material/web/field/outlined-field';
import { MdFocusRing as MdFocusRing$1 } from '@material/web/focus/md-focus-ring';
import { MdIcon as MdIcon$1 } from '@material/web/icon/icon';
import { MdFilledIconButton as MdFilledIconButton$1 } from '@material/web/iconbutton/filled-icon-button';
import { MdFilledTonalIconButton as MdFilledTonalIconButton$1 } from '@material/web/iconbutton/filled-tonal-icon-button';
import { MdIconButton as MdIconButton$1 } from '@material/web/iconbutton/icon-button';
import { MdOutlinedIconButton as MdOutlinedIconButton$1 } from '@material/web/iconbutton/outlined-icon-button';
import { MdListItem as MdListItem$1 } from '@material/web/list/list-item';
import { MdList as MdList$1 } from '@material/web/list/list';
import { MdMenuItem as MdMenuItem$1 } from '@material/web/menu/menu-item';
import { MdMenu as MdMenu$1 } from '@material/web/menu/menu';
import { MdSubMenu as MdSubMenu$1 } from '@material/web/menu/sub-menu';
import { MdCircularProgress as MdCircularProgress$1 } from '@material/web/progress/circular-progress';
import { MdLinearProgress as MdLinearProgress$1 } from '@material/web/progress/linear-progress';
import { MdRadio as MdRadio$1 } from '@material/web/radio/radio';
import { MdRipple as MdRipple$1 } from '@material/web/ripple/ripple';
import { MdFilledSelect as MdFilledSelect$1 } from '@material/web/select/filled-select';
import { MdOutlinedSelect as MdOutlinedSelect$1 } from '@material/web/select/outlined-select';
import { MdSelectOption as MdSelectOption$1 } from '@material/web/select/select-option';
import { MdSlider as MdSlider$1 } from '@material/web/slider/slider';
import { MdSwitch as MdSwitch$1 } from '@material/web/switch/switch';
import { MdPrimaryTab as MdPrimaryTab$1 } from '@material/web/tabs/primary-tab';
import { MdSecondaryTab as MdSecondaryTab$1 } from '@material/web/tabs/secondary-tab';
import { MdTabs as MdTabs$1 } from '@material/web/tabs/tabs';
import { MdFilledTextField as MdFilledTextField$1 } from '@material/web/textfield/filled-text-field';
import { MdOutlinedTextField as MdOutlinedTextField$1 } from '@material/web/textfield/outlined-text-field';
import '@material/web/typography/md-typescale-styles.css';
import { jsx, Fragment } from 'react/jsx-runtime';
import kebabCase from 'kebab-case';
import { MdBadge as MdBadge$1 } from '@material/web/labs/badge/badge';
import { MdElevatedCard as MdElevatedCard$1 } from '@material/web/labs/card/elevated-card';
import { MdFilledCard as MdFilledCard$1 } from '@material/web/labs/card/filled-card';
import { MdOutlinedCard as MdOutlinedCard$1 } from '@material/web/labs/card/outlined-card';
import { MdItem as MdItem$1 } from '@material/web/labs/item/item';
import { MdNavigationBar as MdNavigationBar$1 } from '@material/web/labs/navigationbar/navigation-bar';
import { MdNavigationDrawerModal as MdNavigationDrawerModal$1 } from '@material/web/labs/navigationdrawer/navigation-drawer-modal';
import { MdNavigationDrawer as MdNavigationDrawer$1 } from '@material/web/labs/navigationdrawer/navigation-drawer';
import { MdNavigationTab as MdNavigationTab$1 } from '@material/web/labs/navigationtab/navigation-tab';
import { MdOutlinedSegmentedButton as MdOutlinedSegmentedButton$1 } from '@material/web/labs/segmentedbutton/outlined-segmented-button';
import { MdOutlinedSegmentedButtonSet as MdOutlinedSegmentedButtonSet$1 } from '@material/web/labs/segmentedbuttonset/outlined-segmented-button-set';

/**
 * Get a ReactElement in react from a module that is a Lit element
 * @param module
 * @returns
 */
function useLit(module) {
    const [tagName, setTagName] = useState("default-custom-element");
    useEffect(() => {
        // Set a tagname of custom element to state when instance is initilized.
        module.addInitializer((initilizer) => {
            setTagName(initilizer.tagName);
        });
        // Initilize instance deliberatly to get tagname.
        new module();
    }, [module]);
    return ({ ...props }) => {
        return createElement(tagName, props);
    };
}
/**
 * Get a ReactElement without react from a module that is a Lit element. (Doesn't use state and useEffect)
 * @param module
 * @returns
 */
function litToReact(module) {
    let tagName = "default-custom-element";
    module.addInitializer((initilizer) => {
        tagName = initilizer.tagName;
    });
    // Initilize instance deliberatly to get tagname.
    new module();
    return (props) => {
        if (typeof props.className === "string") {
            const elementProps = {
                ...props,
                class: props["className"],
            };
            delete elementProps.className;
            return createElement(tagName, elementProps);
        }
        else {
            return createElement(tagName, props);
        }
    };
}

const MdElevatedButton = litToReact(MdElevatedButton$1);
const MdFilledButton = litToReact(MdFilledButton$1);
const MdFilledTonalButton = litToReact(MdFilledTonalButton$1);
const MdOutlinedButton = litToReact(MdOutlinedButton$1);
const MdTextButton = litToReact(MdTextButton$1);
const MdCheckbox = litToReact(MdCheckbox$1);
const MdAssistChip = litToReact(MdAssistChip$1);
const MdChipSet = litToReact(MdChipSet$1);
const MdFilterChip = litToReact(MdFilterChip$1);
const MdInputChip = litToReact(MdInputChip$1);
const MdSuggestionChip = litToReact(MdSuggestionChip$1);
const MdDialog = litToReact(MdDialog$1);
const MdDivider = litToReact(MdDivider$1);
const MdElevation = litToReact(MdElevation$1);
const MdBrandedFab = litToReact(MdBrandedFab$1);
const MdFab = litToReact(MdFab$1);
const MdFilledField = litToReact(MdFilledField$1);
const MdOutlinedField = litToReact(MdOutlinedField$1);
const MdFocusRing = litToReact(MdFocusRing$1);
const MdIcon = litToReact(MdIcon$1);
const MdFilledIconButton = litToReact(MdFilledIconButton$1);
const MdFilledTonalIconButton = litToReact(MdFilledTonalIconButton$1);
const MdIconButton = litToReact(MdIconButton$1);
const MdOutlinedIconButton = litToReact(MdOutlinedIconButton$1);
const MdListItem = litToReact(MdListItem$1);
const MdList = litToReact(MdList$1);
const MdMenuItem = litToReact(MdMenuItem$1);
const MdMenu = litToReact(MdMenu$1);
const MdSubMenu = litToReact(MdSubMenu$1);
const MdCircularProgress = litToReact(MdCircularProgress$1);
const MdLinearProgress = litToReact(MdLinearProgress$1);
const MdRadio = litToReact(MdRadio$1);
const MdRipple = litToReact(MdRipple$1);
const MdFilledSelect = litToReact(MdFilledSelect$1);
const MdOutlinedSelect = litToReact(MdOutlinedSelect$1);
const MdSelectOption = litToReact(MdSelectOption$1);
const MdSlider = litToReact(MdSlider$1);
const MdSwitch = litToReact(MdSwitch$1);
const MdPrimaryTab = litToReact(MdPrimaryTab$1);
const MdSecondaryTab = litToReact(MdSecondaryTab$1);
const MdTabs = litToReact(MdTabs$1);
const MdFilledTextField = litToReact(MdFilledTextField$1);
const MdOutlinedTextField = litToReact(MdOutlinedTextField$1);

/**
 * Typography helps make writing legible and beautiful.
 * {@link https://material-web.dev/theming/typography/ Docs}
 * @param param0
 * @returns
 */
function Typography({ component, typescale = "display", size = "medium", className, ...props }) {
    let newClassName = className === undefined ? "" : className;
    // Add token class to className
    const token = "md-typescale-" + typescale + "-" + size;
    newClassName = newClassName === "" ? token : newClassName + " " + token;
    const element = createElement(component, {
        className: newClassName,
        ...props,
    });
    return element;
}

function Theming({ theme, scheme = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light", children, }) {
    useEffect(() => {
        applyTheme(theme, { target: document.body, scheme });
    }, [scheme, theme]);
    return jsx(Fragment, { children: children });
}
function applyTheme(theme, { target, scheme, }) {
    const thisScheme = theme.schemes[scheme];
    const csss = [];
    Object.keys(thisScheme).forEach((propertyName) => {
        const kebab = kebabCase(propertyName);
        const colorHex = thisScheme[propertyName];
        csss.push(`--md-sys-color-${kebab}: ${colorHex};`);
    });
    Object.keys(theme.palettes).forEach((colorName) => {
        const colorPalette = theme.palettes[colorName];
        Object.keys(colorPalette).forEach((colorNumber) => {
            const colorHex = theme.palettes[colorName][colorNumber];
            const kebab = kebabCase(colorName);
            csss.push(`--md-sys-color-${kebab}-${colorNumber}: ${colorHex};`);
        });
    });
    target.setAttribute("style", csss.join(" "));
}

const MdBadge = litToReact(MdBadge$1);
const MdElevatedCard = litToReact(MdElevatedCard$1);
const MdFilledCard = litToReact(MdFilledCard$1);
const MdOutlinedCard = litToReact(MdOutlinedCard$1);
const MdItem = litToReact(MdItem$1);
const MdNavigationBar = litToReact(MdNavigationBar$1);
const MdNavigationDrawerModal = litToReact(MdNavigationDrawerModal$1);
const MdNavigationDrawer = litToReact(MdNavigationDrawer$1);
const MdNavigationTab = litToReact(MdNavigationTab$1);
const MdOutlinedSegmentedButton = litToReact(MdOutlinedSegmentedButton$1);
const MdOutlinedSegmentedButtonSet = litToReact(MdOutlinedSegmentedButtonSet$1);

export { MdAssistChip, MdBadge, MdBrandedFab, MdCheckbox, MdChipSet, MdCircularProgress, MdDialog, MdDivider, MdElevatedButton, MdElevatedCard, MdElevation, MdFab, MdFilledButton, MdFilledCard, MdFilledField, MdFilledIconButton, MdFilledSelect, MdFilledTextField, MdFilledTonalButton, MdFilledTonalIconButton, MdFilterChip, MdFocusRing, MdIcon, MdIconButton, MdInputChip, MdItem, MdLinearProgress, MdList, MdListItem, MdMenu, MdMenuItem, MdNavigationBar, MdNavigationDrawer, MdNavigationDrawerModal, MdNavigationTab, MdOutlinedButton, MdOutlinedCard, MdOutlinedField, MdOutlinedIconButton, MdOutlinedSegmentedButton, MdOutlinedSegmentedButtonSet, MdOutlinedSelect, MdOutlinedTextField, MdPrimaryTab, MdRadio, MdRipple, MdSecondaryTab, MdSelectOption, MdSlider, MdSubMenu, MdSuggestionChip, MdSwitch, MdTabs, MdTextButton, Theming, Typography, applyTheme, litToReact, useLit };
