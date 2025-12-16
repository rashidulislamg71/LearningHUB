

import React, { useEffect } from "react";

const Title = (title = "Home") => {
  useEffect(() => {
    document.title = `${title} - Learning Hub`;
  }, [title]);
};

export default Title;