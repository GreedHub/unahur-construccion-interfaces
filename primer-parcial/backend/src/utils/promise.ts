export default function PromiseHelper(promise: Promise<any>) {
    return promise.then((data) => [data]).catch((err) => [null, err])
  }