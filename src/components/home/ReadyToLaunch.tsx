import Container from "@/components/ui/Container";
import Button from "../ui/Button";


export default function ReadyToLaunchSection() {
  return (
   <Container>
         <div className="w-full flex flex-col items-center justify-center  overflow-hidden text-center space-y-4 py-12 md:py-16">
           <h1 className="text-center text-4xl md:text-6xl lg:text-[90px] font-semibold">
             <span className="block">Ready To Launch </span>
             <span className="block text-secondary">Your Mobile Network?</span>
           </h1>
           <p className="px-3 text-center text-[18px] lg:text-[22px] text-secondary">
             <span className="md:block">
              Launch a fully branded mobile network with everything you need to onboard customers,
             </span>
             <span className="md:block">
              manage SIMs and grow recurring revenue under your own brand.
             </span>
           </p>
           <Button href="/contact" className="mt-2">Launch Your Network</Button>
         </div>
       </Container>
   
  );
}
 