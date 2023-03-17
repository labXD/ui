import type { OverlayTriggerState } from "react-stately"
import * as React from "react"
import {
  AriaPopoverProps,
  usePopover,
  DismissButton,
  Overlay,
} from "react-aria"

interface PopoverProps extends Omit<AriaPopoverProps, "popoverRef"> {
  children: React.ReactNode
  state: OverlayTriggerState
  className?: string
  popoverRef?: React.RefObject<HTMLDivElement>
}

export function Popover(props: PopoverProps) {
  let ref = React.useRef<HTMLDivElement>(null)
  let { popoverRef = ref, state, children, className, isNonModal } = props

  let { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state
  )

  return (
    <Overlay portalContainer={document.body}>
      {!isNonModal && <div {...underlayProps} className="fixed inset-0" />}
      <div
        {...popoverProps}
        ref={popoverRef}
        className={`z-10 shadow-lg border border-gray-300 bg-white rounded-md mt-2 overflow-y-auto ${className}`}
      >
        {!isNonModal && <DismissButton onDismiss={state.close} />}
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  )
}
