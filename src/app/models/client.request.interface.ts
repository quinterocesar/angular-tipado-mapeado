export interface ReqRespClient {
    Code:    number;
    Message: string;
    Body:    Body;
}

interface Body {
    customerFields: Customer;
    customer:       Customer[];
}

interface Customer {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
    f: string;
    g: string;
    h: string;
    i: string;
    j: string;
    k: string;
    l: string;
    m: string;
    n: string;
    o: string;
    p: string;
    q: string;
    r: string;
    s: string;
    t: string;
    u: string;
    addressee?: Addressee[];
}

interface Addressee {
    code:    string;
    address: string;
}