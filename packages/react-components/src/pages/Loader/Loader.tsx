import { Loader } from "@/components";

export default function LoaderPage() {
  return(
    <>
      <h2>Loading wheels</h2>
      <div style={{backgroundColor: "lightgray", display: "flex", height: "100px", width: "100px"}}>
        <Loader label="Loading..." isIndeterminate size="small"/>
      </div>
      <Loader isIndeterminate/>
      <div style={{backgroundColor: "darkgray", display: "flex", height: "200px", width: "200px"}}>
        <Loader label="Preparing to launch..." isIndeterminate size="large" theme="dark"/>
      </div>
      <Loader value={69}/>
    </>
  );
}