export enum EButtonVariants {
  menu = 'background-main rounded-lg text-md font-bold text-white tracking-wide focus:outline-none',
  form = 'rounded-lg text-md font-bold tracking-wide text-white focus:outline-none',
  none = ''
}

export enum EButtonHoverVariants {
  menu = 'transform hover:-translate-x-2 hover:-translate-y-1 hover:shadow-hover',
  form = 'transform hover:-translate-x-2 hover:-translate-y-1 hover:shadow-hover',
  none = ''
}

export enum EDisabledVariants {
   form = 'rounded-lg text-md font-semibold bg-gray-200 text-ghost_white focus:outline-none cursor-default',
   none = ''
}

export enum EButtonHeights {
  default = '2rem',
  lg = '2.5rem'
}

export enum EButtonWidths {
  default = '8rem',
  lg = '12rem',
  fit = 'fit-content'
}