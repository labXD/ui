import type { AriaCheckboxProps } from "@react-types/checkbox"
import React, { useRef } from "react"
import { useToggleState } from "react-stately"
import {
  useCheckbox,
  VisuallyHidden,
  mergeProps,
  useFocusRing,
} from "react-aria"
import clsx from "clsx"

export function Checkbox(props: AriaCheckboxProps) {
  let state = useToggleState(props)
  let ref = useRef<HTMLInputElement>(null)
  let { inputProps } = useCheckbox(props, state, ref)
  let { focusProps, isFocusVisible } = useFocusRing()

  let checkboxClassName = clsx("transition ease-in-out duration-150", {
    "bg-indigo-500 group-active:bg-indigo-600": state.isSelected,
    "bg-white text-white border-2 rounde": !state.isSelected,
    "border-gray-300": props.isDisabled,
    "border-indigo-500 group-active:border-indigo-600":
      isFocusVisible || state.isSelected,
    "border-gray-500 group-active:border-gray-600 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2":
      !props.isDisabled && (isFocusVisible || state.isSelected),
    "shadow-outline": isFocusVisible,
  })

  let labelClassName = clsx({
    "text-gray-400": props.isDisabled,
    "text-gray-700 group-active:text-gray-800 select-none": !props.isDisabled,
  })

  return (
    <label className="flex items-center group">
      <VisuallyHidden>
        <input {...mergeProps(inputProps, focusProps)} ref={ref} />
      </VisuallyHidden>
      <div className={checkboxClassName} aria-hidden="true">
        <svg className="stroke-current w-3 h-3" viewBox="0 0 18 18">
          <polyline
            points="1 9 7 14 15 4"
            fill="none"
            strokeWidth={3}
            strokeDasharray={22}
            strokeDashoffset={state.isSelected ? 44 : 66}
            style={{
              transition: "all 400ms",
            }}
          />
        </svg>
      </div>
      <span className={labelClassName}>{props.children}</span>
    </label>
  )
}
