import Image from "next/image";
import Link from "next/link";
import { createClient } from "@/app/utils/supabase/server";
import { redirect } from 'next/navigation'

export default async function ErrorPage() {

  // const supabase = createClient()
  //   const { data, error } = await supabase.auth.getUser()
  //   if (error || data?.user) {
  //     redirect('/')
  //   }

    return (
      <div className="mt-10 space-x-5 align-middle flex items-center justify-center"> 
        <Link href="/organization">
          <Image src="/404error.png" alt="error" width={800} height={800}/>
        </Link>
      </div>  
    );
  }