export MenuProvider from 'src/MenuProvider'
export MenuPlaceholder from 'src/MenuPlaceholder'
export Menu from 'src/Menu'
export Backdrop from 'src/Backdrop'
export MenuOption from 'src/MenuOption'
export MenuOptions from 'src/MenuOptions'
export MenuTrigger from 'src/MenuTrigger'
import ContextMenu  from 'src/renderers/ContextMenu'
import MenuOutside from 'src/renderers/MenuOutside'
import SlideInMenu from 'src/renderers/SlideInMenu'
import NotAnimatedContextMenu from 'src/renderers/NotAnimatedContextMenu'
import Popover from 'src/renderers/Popover'

export const renderers = {
    ContextMenu,
    MenuOutside,
    SlideInMenu,
    NotAnimatedContextMenu,
    Popover,
}
