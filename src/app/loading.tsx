export default function Loading() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      zIndex: 9999,
      overflow: "hidden",
      background: "rgba(238,35,84,.15)",
    }}>
      <div style={{
        height: "100%",
        background: "#EE2354",
        animation: "slide 1.2s ease-in-out infinite",
      }}/>
      <style suppressHydrationWarning dangerouslySetInnerHTML={{__html:`
        @keyframes slide{0%{transform:translateX(-100%);width:60%}50%{transform:translateX(60%);width:40%}100%{transform:translateX(200%);width:60%}}
      `}} />
    </div>
  );
}
