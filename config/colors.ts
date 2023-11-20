import { commonColors, semanticColors } from '@nextui-org/theme'

// commonColors.cyan = {
//   ...commonColors.red,
// }
// commonColors.purple = {
//   ...commonColors.red,
// }

// semanticColors.light = {
//   ...semanticColors.light,
//   // primary: {
//   //   ...commonColors.blue,
//   //   DEFAULT: commonColors.blue[500],
//   // },
//   primary: {
//     ...commonColors.cyan,
//     DEFAULT: commonColors.cyan[500],
//   },
// }

const cmSemanticColors = Object.freeze(semanticColors)
const cmColors = Object.freeze(commonColors)

export { cmColors, cmSemanticColors }

export type CommonColors = typeof cmColors
export type SemanticColors = typeof cmSemanticColors
