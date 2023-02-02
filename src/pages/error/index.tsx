import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NoAccessRights from "./no-access-rights";
import NotFound from "./not-found";

const Error = ({ code }: { code: number }) => {
  // const [errorCode, setErrorCode] = useState<Number>();

  return (
    <div>
      <Routes>
        {code === 404 ? (
          <NotFound />
        ) : (
          // <Route path="/404" element={<NotFound />} />
          <NoAccessRights />
          // <Route path="/403" element={<NoAccessRights />} />
        )}
      </Routes>
    </div>
  );
};

export default Error;
