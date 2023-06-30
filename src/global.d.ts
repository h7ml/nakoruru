interface Window {
  MonacoEnvironment: {
    getWorker(_: any, label: string): Worker
  }
}

type Concat<A, B> = Omit<A, keyof B> & B

type PickPromise<T> = T extends Promise<infer D> ? D : never
