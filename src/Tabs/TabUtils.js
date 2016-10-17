export function calculateTabWidthAndInkbarPosition(tabs, selectedIndex, defaultWidth) {
  let i;
  let left = 0;
  let undefinedLabelWidths = 0;
  for (i = 0; i < tabs.length; i++) {
    const labelWidth = tabs[i].props.labelWidth;
    if (labelWidth && i < selectedIndex)
      left += labelWidth;
    else if (!labelWidth)
      undefinedLabelWidths++;
  }
  if (undefinedLabelWidths === 0)
    return {
      inkbarPosition: `${left}px`,
      width: `${tabs[selectedIndex].props.labelWidth}px`,
    };
  else if (undefinedLabelWidths === tabs.length)
    return {
      inkbarPosition: `${defaultWidth * selectedIndex}%`,
      width: `${defaultWidth}%`,
    };
}
