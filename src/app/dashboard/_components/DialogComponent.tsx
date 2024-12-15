import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";

interface DialogComponentProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  firstImage: { imageUrl: string | undefined };
  secondImage: { imageUrl: string | undefined };
}

const DialogComponent: React.FC<DialogComponentProps> = ({
  open,
  onOpenChange,
  firstImage,
  secondImage,
}) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent style={{ maxWidth: "500px", padding: "20px" }}>
        <DialogHeader>
          <ReactBeforeSliderComponent
            firstImage={{
              imageUrl: firstImage.imageUrl || "/placeholder.jpg",  
            }}
            secondImage={{
              imageUrl: secondImage.imageUrl || "/placeholder.jpg",  
            }}
            className="mt-4"
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogComponent;
