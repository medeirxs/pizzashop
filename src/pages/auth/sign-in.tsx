import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input";

//<form className="flex flex-col gap-4">
//<div className="">
//<Label htmlFor="email">Seu e-mail</Label>
//<Input id="email" type="email" placeholder="m@example.com" />
//</div>
//<Button type="submit" className=" w-full">Acessar</Button>
//</form>

export function SignIn(){
  return(
    <>
    <Helmet title="Login" />
      <div className="space-y-4 w-[400px] h-96 p-8 flex flex-col justify-center rounded-lg drop-shadow-xl">
        <div className="flex flex-col items-center">
          <span className="text-3xl font-bold tracking-tight">Acessar Painel</span>
          <span className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</span>
        </div>

        <form className="flex flex-col gap-2">
          <Label htmlFor="email">Seu e-mail</Label>
          <Input id="email" type="email" placeholder="m@example.com"/>

          <Button type="submit">Acessar</Button>
        </form>

        <span className='text-sm flex flex-col items-center text-muted-foreground'> Painel do parceiro &copy; pizza.shop</span>
      </div>
    </> 
  )
}