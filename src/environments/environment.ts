const api = 'https://api.quimicasuiza.com';
const apiKey = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJhcHAiOiJxdWltaXZlbnRhIiwiaGFtYmllbnRlIjoicHJkIiwieWVhciI6IjIwMTkiLCJzdXBwb3J0Ijoid3d3LnF1aW1pY2FzdWl6YS5jb20ifQ.aivnszuHEsXVxM1BWUy4uHhbS46DN2l7JzZw1DirVYAdh54Oj5owBq_9CV_cMStpRhy0YCgwYE4gaZP3yDP1gRiy-iJUgfsTNmrVtCF9BEjPCT4iSnDKNxrRRxCqMOJPvodlGJF8qIMn3SvlFqI8Do4zDQmhu8krxN4eDeVhyCJkgNiuTHFvFGu85eEDzEMjyVcNVuXeUSV8BIz14gCfwE52BFisCeoJiOByMY5E1vssZmxH3EdyueobdvSkh1y3fHWYHEGgqrcVR5XpvErYydobHL_oU8xGf5GRxNPL-1APz-sQsScFNPsZ1mPYdejT3xdA5up6p4BTNjPIAZQwFA';

export const environment = {
  production: false,
  apiKey,
  clientEndPoint: {
    offline: `${api}:8485/OffLine/GetClientsDetailsV2/v1`
  }
};
