import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function AddFood() {
  return (
    <Dialog>
      <DialogTrigger>Add Food</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to add this food item? Please confirm your
            action.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
