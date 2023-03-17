import * as React from "react"
import { AlertDialog, Modal, Button } from "@/components"
import { useOverlayTriggerState } from "react-stately"

export default function App() {
  let state = useOverlayTriggerState({})
  return (
    <div className="flex flex-col items-center max-w-lg mx-auto">
      <Button onPress={state.open}>Delete…</Button>
      <Modal state={state}>
        <AlertDialog
          title="Delete folder"
          confirmLabel="Delete"
          variant="destructive"
          onClose={state.close}
        >
          Are you sure you want to delete Documents? All contents will be
          perminately destroyed.
        </AlertDialog>
      </Modal>
    </div>
  )
}
