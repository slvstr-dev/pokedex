'use client';

import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Modal } from './internal/Modal';

export interface DialogProps extends DialogPrimitive.DialogProps {}

export function Dialog({ ...props }: DialogProps) {
  return <DialogPrimitive.Root {...props} />;
}

Dialog.Trigger = DialogPrimitive.Trigger;
Dialog.Close = DialogPrimitive.Close;
Dialog.Modal = Modal;
