
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Road
 * 
 */
export type Road = $Result.DefaultSelection<Prisma.$RoadPayload>
/**
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Relation
 * 
 */
export type Relation = $Result.DefaultSelection<Prisma.$RelationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Category: {
  TRILHA: 'TRILHA',
  PRAIA: 'PRAIA',
  LARICA: 'LARICA'
};

export type Category = (typeof Category)[keyof typeof Category]

}

export type Category = $Enums.Category

export const Category: typeof $Enums.Category

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.road`: Exposes CRUD operations for the **Road** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roads
    * const roads = await prisma.road.findMany()
    * ```
    */
  get road(): Prisma.RoadDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.relation`: Exposes CRUD operations for the **Relation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Relations
    * const relations = await prisma.relation.findMany()
    * ```
    */
  get relation(): Prisma.RelationDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Users: 'Users',
    Road: 'Road',
    Address: 'Address',
    Relation: 'Relation'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "users" | "road" | "address" | "relation"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Road: {
        payload: Prisma.$RoadPayload<ExtArgs>
        fields: Prisma.RoadFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoadFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoadFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>
          }
          findFirst: {
            args: Prisma.RoadFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoadFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>
          }
          findMany: {
            args: Prisma.RoadFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>[]
          }
          create: {
            args: Prisma.RoadCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>
          }
          createMany: {
            args: Prisma.RoadCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoadCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>[]
          }
          delete: {
            args: Prisma.RoadDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>
          }
          update: {
            args: Prisma.RoadUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>
          }
          deleteMany: {
            args: Prisma.RoadDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoadUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoadUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>[]
          }
          upsert: {
            args: Prisma.RoadUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RoadPayload>
          }
          aggregate: {
            args: Prisma.RoadAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoad>
          }
          groupBy: {
            args: Prisma.RoadGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoadGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoadCountArgs<ExtArgs>
            result: $Utils.Optional<RoadCountAggregateOutputType> | number
          }
        }
      }
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Relation: {
        payload: Prisma.$RelationPayload<ExtArgs>
        fields: Prisma.RelationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RelationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RelationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findFirst: {
            args: Prisma.RelationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RelationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          findMany: {
            args: Prisma.RelationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          create: {
            args: Prisma.RelationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          createMany: {
            args: Prisma.RelationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RelationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          delete: {
            args: Prisma.RelationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          update: {
            args: Prisma.RelationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          deleteMany: {
            args: Prisma.RelationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RelationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RelationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>[]
          }
          upsert: {
            args: Prisma.RelationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RelationPayload>
          }
          aggregate: {
            args: Prisma.RelationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRelation>
          }
          groupBy: {
            args: Prisma.RelationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RelationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RelationCountArgs<ExtArgs>
            result: $Utils.Optional<RelationCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    users?: UsersOmit
    road?: RoadOmit
    address?: AddressOmit
    relation?: RelationOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    relations: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | UsersCountOutputTypeCountRelationsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }


  /**
   * Count Type RoadCountOutputType
   */

  export type RoadCountOutputType = {
    relations: number
  }

  export type RoadCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | RoadCountOutputTypeCountRelationsArgs
  }

  // Custom InputTypes
  /**
   * RoadCountOutputType without action
   */
  export type RoadCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoadCountOutputType
     */
    select?: RoadCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoadCountOutputType without action
   */
  export type RoadCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }


  /**
   * Count Type AddressCountOutputType
   */

  export type AddressCountOutputType = {
    relations: number
  }

  export type AddressCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | AddressCountOutputTypeCountRelationsArgs
  }

  // Custom InputTypes
  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressCountOutputType
     */
    select?: AddressCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressCountOutputType without action
   */
  export type AddressCountOutputTypeCountRelationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    current_coins: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    current_coins: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    current_coins: number | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    current_coins: number | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    current_coins: number
    created_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    current_coins?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    current_coins?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    current_coins?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    current_coins?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    current_coins?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    name: string
    email: string
    password: string
    current_coins: number
    created_at: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    current_coins?: boolean
    created_at?: boolean
    relations?: boolean | Users$relationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    current_coins?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    current_coins?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    current_coins?: boolean
    created_at?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "current_coins" | "created_at", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | Users$relationsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      relations: Prisma.$RelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      current_coins: number
      created_at: Date
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relations<T extends Users$relationsArgs<ExtArgs> = {}>(args?: Subset<T, Users$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'Int'>
    readonly name: FieldRef<"Users", 'String'>
    readonly email: FieldRef<"Users", 'String'>
    readonly password: FieldRef<"Users", 'String'>
    readonly current_coins: FieldRef<"Users", 'Int'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.relations
   */
  export type Users$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Road
   */

  export type AggregateRoad = {
    _count: RoadCountAggregateOutputType | null
    _avg: RoadAvgAggregateOutputType | null
    _sum: RoadSumAggregateOutputType | null
    _min: RoadMinAggregateOutputType | null
    _max: RoadMaxAggregateOutputType | null
  }

  export type RoadAvgAggregateOutputType = {
    id: number | null
    days: number | null
    attempt_coins: number | null
  }

  export type RoadSumAggregateOutputType = {
    id: number | null
    days: number | null
    attempt_coins: number | null
  }

  export type RoadMinAggregateOutputType = {
    id: number | null
    days: number | null
    attempt_coins: number | null
    created_at: Date | null
  }

  export type RoadMaxAggregateOutputType = {
    id: number | null
    days: number | null
    attempt_coins: number | null
    created_at: Date | null
  }

  export type RoadCountAggregateOutputType = {
    id: number
    days: number
    attempt_coins: number
    created_at: number
    _all: number
  }


  export type RoadAvgAggregateInputType = {
    id?: true
    days?: true
    attempt_coins?: true
  }

  export type RoadSumAggregateInputType = {
    id?: true
    days?: true
    attempt_coins?: true
  }

  export type RoadMinAggregateInputType = {
    id?: true
    days?: true
    attempt_coins?: true
    created_at?: true
  }

  export type RoadMaxAggregateInputType = {
    id?: true
    days?: true
    attempt_coins?: true
    created_at?: true
  }

  export type RoadCountAggregateInputType = {
    id?: true
    days?: true
    attempt_coins?: true
    created_at?: true
    _all?: true
  }

  export type RoadAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Road to aggregate.
     */
    where?: RoadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roads to fetch.
     */
    orderBy?: RoadOrderByWithRelationInput | RoadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roads
    **/
    _count?: true | RoadCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoadAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoadSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoadMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoadMaxAggregateInputType
  }

  export type GetRoadAggregateType<T extends RoadAggregateArgs> = {
        [P in keyof T & keyof AggregateRoad]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoad[P]>
      : GetScalarType<T[P], AggregateRoad[P]>
  }




  export type RoadGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoadWhereInput
    orderBy?: RoadOrderByWithAggregationInput | RoadOrderByWithAggregationInput[]
    by: RoadScalarFieldEnum[] | RoadScalarFieldEnum
    having?: RoadScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoadCountAggregateInputType | true
    _avg?: RoadAvgAggregateInputType
    _sum?: RoadSumAggregateInputType
    _min?: RoadMinAggregateInputType
    _max?: RoadMaxAggregateInputType
  }

  export type RoadGroupByOutputType = {
    id: number
    days: number
    attempt_coins: number
    created_at: Date
    _count: RoadCountAggregateOutputType | null
    _avg: RoadAvgAggregateOutputType | null
    _sum: RoadSumAggregateOutputType | null
    _min: RoadMinAggregateOutputType | null
    _max: RoadMaxAggregateOutputType | null
  }

  type GetRoadGroupByPayload<T extends RoadGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoadGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoadGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoadGroupByOutputType[P]>
            : GetScalarType<T[P], RoadGroupByOutputType[P]>
        }
      >
    >


  export type RoadSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    days?: boolean
    attempt_coins?: boolean
    created_at?: boolean
    relations?: boolean | Road$relationsArgs<ExtArgs>
    _count?: boolean | RoadCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["road"]>

  export type RoadSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    days?: boolean
    attempt_coins?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["road"]>

  export type RoadSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    days?: boolean
    attempt_coins?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["road"]>

  export type RoadSelectScalar = {
    id?: boolean
    days?: boolean
    attempt_coins?: boolean
    created_at?: boolean
  }

  export type RoadOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "days" | "attempt_coins" | "created_at", ExtArgs["result"]["road"]>
  export type RoadInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | Road$relationsArgs<ExtArgs>
    _count?: boolean | RoadCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoadIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoadIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RoadPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Road"
    objects: {
      relations: Prisma.$RelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      days: number
      attempt_coins: number
      created_at: Date
    }, ExtArgs["result"]["road"]>
    composites: {}
  }

  type RoadGetPayload<S extends boolean | null | undefined | RoadDefaultArgs> = $Result.GetResult<Prisma.$RoadPayload, S>

  type RoadCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoadFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoadCountAggregateInputType | true
    }

  export interface RoadDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Road'], meta: { name: 'Road' } }
    /**
     * Find zero or one Road that matches the filter.
     * @param {RoadFindUniqueArgs} args - Arguments to find a Road
     * @example
     * // Get one Road
     * const road = await prisma.road.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoadFindUniqueArgs>(args: SelectSubset<T, RoadFindUniqueArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Road that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoadFindUniqueOrThrowArgs} args - Arguments to find a Road
     * @example
     * // Get one Road
     * const road = await prisma.road.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoadFindUniqueOrThrowArgs>(args: SelectSubset<T, RoadFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Road that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFindFirstArgs} args - Arguments to find a Road
     * @example
     * // Get one Road
     * const road = await prisma.road.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoadFindFirstArgs>(args?: SelectSubset<T, RoadFindFirstArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Road that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFindFirstOrThrowArgs} args - Arguments to find a Road
     * @example
     * // Get one Road
     * const road = await prisma.road.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoadFindFirstOrThrowArgs>(args?: SelectSubset<T, RoadFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roads that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roads
     * const roads = await prisma.road.findMany()
     * 
     * // Get first 10 Roads
     * const roads = await prisma.road.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roadWithIdOnly = await prisma.road.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoadFindManyArgs>(args?: SelectSubset<T, RoadFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Road.
     * @param {RoadCreateArgs} args - Arguments to create a Road.
     * @example
     * // Create one Road
     * const Road = await prisma.road.create({
     *   data: {
     *     // ... data to create a Road
     *   }
     * })
     * 
     */
    create<T extends RoadCreateArgs>(args: SelectSubset<T, RoadCreateArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roads.
     * @param {RoadCreateManyArgs} args - Arguments to create many Roads.
     * @example
     * // Create many Roads
     * const road = await prisma.road.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoadCreateManyArgs>(args?: SelectSubset<T, RoadCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roads and returns the data saved in the database.
     * @param {RoadCreateManyAndReturnArgs} args - Arguments to create many Roads.
     * @example
     * // Create many Roads
     * const road = await prisma.road.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roads and only return the `id`
     * const roadWithIdOnly = await prisma.road.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoadCreateManyAndReturnArgs>(args?: SelectSubset<T, RoadCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Road.
     * @param {RoadDeleteArgs} args - Arguments to delete one Road.
     * @example
     * // Delete one Road
     * const Road = await prisma.road.delete({
     *   where: {
     *     // ... filter to delete one Road
     *   }
     * })
     * 
     */
    delete<T extends RoadDeleteArgs>(args: SelectSubset<T, RoadDeleteArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Road.
     * @param {RoadUpdateArgs} args - Arguments to update one Road.
     * @example
     * // Update one Road
     * const road = await prisma.road.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoadUpdateArgs>(args: SelectSubset<T, RoadUpdateArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roads.
     * @param {RoadDeleteManyArgs} args - Arguments to filter Roads to delete.
     * @example
     * // Delete a few Roads
     * const { count } = await prisma.road.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoadDeleteManyArgs>(args?: SelectSubset<T, RoadDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roads
     * const road = await prisma.road.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoadUpdateManyArgs>(args: SelectSubset<T, RoadUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roads and returns the data updated in the database.
     * @param {RoadUpdateManyAndReturnArgs} args - Arguments to update many Roads.
     * @example
     * // Update many Roads
     * const road = await prisma.road.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roads and only return the `id`
     * const roadWithIdOnly = await prisma.road.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoadUpdateManyAndReturnArgs>(args: SelectSubset<T, RoadUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Road.
     * @param {RoadUpsertArgs} args - Arguments to update or create a Road.
     * @example
     * // Update or create a Road
     * const road = await prisma.road.upsert({
     *   create: {
     *     // ... data to create a Road
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Road we want to update
     *   }
     * })
     */
    upsert<T extends RoadUpsertArgs>(args: SelectSubset<T, RoadUpsertArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roads.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadCountArgs} args - Arguments to filter Roads to count.
     * @example
     * // Count the number of Roads
     * const count = await prisma.road.count({
     *   where: {
     *     // ... the filter for the Roads we want to count
     *   }
     * })
    **/
    count<T extends RoadCountArgs>(
      args?: Subset<T, RoadCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoadCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Road.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoadAggregateArgs>(args: Subset<T, RoadAggregateArgs>): Prisma.PrismaPromise<GetRoadAggregateType<T>>

    /**
     * Group by Road.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoadGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoadGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoadGroupByArgs['orderBy'] }
        : { orderBy?: RoadGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoadGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoadGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Road model
   */
  readonly fields: RoadFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Road.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoadClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relations<T extends Road$relationsArgs<ExtArgs> = {}>(args?: Subset<T, Road$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Road model
   */
  interface RoadFieldRefs {
    readonly id: FieldRef<"Road", 'Int'>
    readonly days: FieldRef<"Road", 'Int'>
    readonly attempt_coins: FieldRef<"Road", 'Int'>
    readonly created_at: FieldRef<"Road", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Road findUnique
   */
  export type RoadFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * Filter, which Road to fetch.
     */
    where: RoadWhereUniqueInput
  }

  /**
   * Road findUniqueOrThrow
   */
  export type RoadFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * Filter, which Road to fetch.
     */
    where: RoadWhereUniqueInput
  }

  /**
   * Road findFirst
   */
  export type RoadFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * Filter, which Road to fetch.
     */
    where?: RoadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roads to fetch.
     */
    orderBy?: RoadOrderByWithRelationInput | RoadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roads.
     */
    cursor?: RoadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roads.
     */
    distinct?: RoadScalarFieldEnum | RoadScalarFieldEnum[]
  }

  /**
   * Road findFirstOrThrow
   */
  export type RoadFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * Filter, which Road to fetch.
     */
    where?: RoadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roads to fetch.
     */
    orderBy?: RoadOrderByWithRelationInput | RoadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roads.
     */
    cursor?: RoadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roads.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roads.
     */
    distinct?: RoadScalarFieldEnum | RoadScalarFieldEnum[]
  }

  /**
   * Road findMany
   */
  export type RoadFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * Filter, which Roads to fetch.
     */
    where?: RoadWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roads to fetch.
     */
    orderBy?: RoadOrderByWithRelationInput | RoadOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roads.
     */
    cursor?: RoadWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roads from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roads.
     */
    skip?: number
    distinct?: RoadScalarFieldEnum | RoadScalarFieldEnum[]
  }

  /**
   * Road create
   */
  export type RoadCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * The data needed to create a Road.
     */
    data: XOR<RoadCreateInput, RoadUncheckedCreateInput>
  }

  /**
   * Road createMany
   */
  export type RoadCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roads.
     */
    data: RoadCreateManyInput | RoadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Road createManyAndReturn
   */
  export type RoadCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * The data used to create many Roads.
     */
    data: RoadCreateManyInput | RoadCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Road update
   */
  export type RoadUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * The data needed to update a Road.
     */
    data: XOR<RoadUpdateInput, RoadUncheckedUpdateInput>
    /**
     * Choose, which Road to update.
     */
    where: RoadWhereUniqueInput
  }

  /**
   * Road updateMany
   */
  export type RoadUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roads.
     */
    data: XOR<RoadUpdateManyMutationInput, RoadUncheckedUpdateManyInput>
    /**
     * Filter which Roads to update
     */
    where?: RoadWhereInput
    /**
     * Limit how many Roads to update.
     */
    limit?: number
  }

  /**
   * Road updateManyAndReturn
   */
  export type RoadUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * The data used to update Roads.
     */
    data: XOR<RoadUpdateManyMutationInput, RoadUncheckedUpdateManyInput>
    /**
     * Filter which Roads to update
     */
    where?: RoadWhereInput
    /**
     * Limit how many Roads to update.
     */
    limit?: number
  }

  /**
   * Road upsert
   */
  export type RoadUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * The filter to search for the Road to update in case it exists.
     */
    where: RoadWhereUniqueInput
    /**
     * In case the Road found by the `where` argument doesn't exist, create a new Road with this data.
     */
    create: XOR<RoadCreateInput, RoadUncheckedCreateInput>
    /**
     * In case the Road was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoadUpdateInput, RoadUncheckedUpdateInput>
  }

  /**
   * Road delete
   */
  export type RoadDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
    /**
     * Filter which Road to delete.
     */
    where: RoadWhereUniqueInput
  }

  /**
   * Road deleteMany
   */
  export type RoadDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roads to delete
     */
    where?: RoadWhereInput
    /**
     * Limit how many Roads to delete.
     */
    limit?: number
  }

  /**
   * Road.relations
   */
  export type Road$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Road without action
   */
  export type RoadDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Road
     */
    select?: RoadSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Road
     */
    omit?: RoadOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoadInclude<ExtArgs> | null
  }


  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.Category | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    name: string | null
    category: $Enums.Category | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    name: number
    category: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    name?: true
    category?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    name?: true
    category?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    name: string
    category: $Enums.Category
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
    relations?: boolean | Address$relationsArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    category?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    name?: boolean
    category?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "category", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    relations?: boolean | Address$relationsArgs<ExtArgs>
    _count?: boolean | AddressCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      relations: Prisma.$RelationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      category: $Enums.Category
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    relations<T extends Address$relationsArgs<ExtArgs> = {}>(args?: Subset<T, Address$relationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly name: FieldRef<"Address", 'String'>
    readonly category: FieldRef<"Address", 'Category'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.relations
   */
  export type Address$relationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    cursor?: RelationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Relation
   */

  export type AggregateRelation = {
    _count: RelationCountAggregateOutputType | null
    _avg: RelationAvgAggregateOutputType | null
    _sum: RelationSumAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  export type RelationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
    roadId: number | null
  }

  export type RelationSumAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
    roadId: number | null
  }

  export type RelationMinAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
    roadId: number | null
  }

  export type RelationMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    addressId: number | null
    roadId: number | null
  }

  export type RelationCountAggregateOutputType = {
    id: number
    userId: number
    addressId: number
    roadId: number
    _all: number
  }


  export type RelationAvgAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    roadId?: true
  }

  export type RelationSumAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    roadId?: true
  }

  export type RelationMinAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    roadId?: true
  }

  export type RelationMaxAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    roadId?: true
  }

  export type RelationCountAggregateInputType = {
    id?: true
    userId?: true
    addressId?: true
    roadId?: true
    _all?: true
  }

  export type RelationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relation to aggregate.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Relations
    **/
    _count?: true | RelationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RelationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RelationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RelationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RelationMaxAggregateInputType
  }

  export type GetRelationAggregateType<T extends RelationAggregateArgs> = {
        [P in keyof T & keyof AggregateRelation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRelation[P]>
      : GetScalarType<T[P], AggregateRelation[P]>
  }




  export type RelationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RelationWhereInput
    orderBy?: RelationOrderByWithAggregationInput | RelationOrderByWithAggregationInput[]
    by: RelationScalarFieldEnum[] | RelationScalarFieldEnum
    having?: RelationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RelationCountAggregateInputType | true
    _avg?: RelationAvgAggregateInputType
    _sum?: RelationSumAggregateInputType
    _min?: RelationMinAggregateInputType
    _max?: RelationMaxAggregateInputType
  }

  export type RelationGroupByOutputType = {
    id: number
    userId: number
    addressId: number
    roadId: number
    _count: RelationCountAggregateOutputType | null
    _avg: RelationAvgAggregateOutputType | null
    _sum: RelationSumAggregateOutputType | null
    _min: RelationMinAggregateOutputType | null
    _max: RelationMaxAggregateOutputType | null
  }

  type GetRelationGroupByPayload<T extends RelationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RelationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RelationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RelationGroupByOutputType[P]>
            : GetScalarType<T[P], RelationGroupByOutputType[P]>
        }
      >
    >


  export type RelationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    addressId?: boolean
    roadId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    road?: boolean | RoadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    addressId?: boolean
    roadId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    road?: boolean | RoadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    addressId?: boolean
    roadId?: boolean
    user?: boolean | UsersDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    road?: boolean | RoadDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["relation"]>

  export type RelationSelectScalar = {
    id?: boolean
    userId?: boolean
    addressId?: boolean
    roadId?: boolean
  }

  export type RelationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "addressId" | "roadId", ExtArgs["result"]["relation"]>
  export type RelationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    road?: boolean | RoadDefaultArgs<ExtArgs>
  }
  export type RelationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    road?: boolean | RoadDefaultArgs<ExtArgs>
  }
  export type RelationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UsersDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    road?: boolean | RoadDefaultArgs<ExtArgs>
  }

  export type $RelationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Relation"
    objects: {
      user: Prisma.$UsersPayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs>
      road: Prisma.$RoadPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      addressId: number
      roadId: number
    }, ExtArgs["result"]["relation"]>
    composites: {}
  }

  type RelationGetPayload<S extends boolean | null | undefined | RelationDefaultArgs> = $Result.GetResult<Prisma.$RelationPayload, S>

  type RelationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RelationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RelationCountAggregateInputType | true
    }

  export interface RelationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Relation'], meta: { name: 'Relation' } }
    /**
     * Find zero or one Relation that matches the filter.
     * @param {RelationFindUniqueArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RelationFindUniqueArgs>(args: SelectSubset<T, RelationFindUniqueArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Relation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RelationFindUniqueOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RelationFindUniqueOrThrowArgs>(args: SelectSubset<T, RelationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RelationFindFirstArgs>(args?: SelectSubset<T, RelationFindFirstArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Relation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindFirstOrThrowArgs} args - Arguments to find a Relation
     * @example
     * // Get one Relation
     * const relation = await prisma.relation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RelationFindFirstOrThrowArgs>(args?: SelectSubset<T, RelationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Relations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Relations
     * const relations = await prisma.relation.findMany()
     * 
     * // Get first 10 Relations
     * const relations = await prisma.relation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const relationWithIdOnly = await prisma.relation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RelationFindManyArgs>(args?: SelectSubset<T, RelationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Relation.
     * @param {RelationCreateArgs} args - Arguments to create a Relation.
     * @example
     * // Create one Relation
     * const Relation = await prisma.relation.create({
     *   data: {
     *     // ... data to create a Relation
     *   }
     * })
     * 
     */
    create<T extends RelationCreateArgs>(args: SelectSubset<T, RelationCreateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Relations.
     * @param {RelationCreateManyArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RelationCreateManyArgs>(args?: SelectSubset<T, RelationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Relations and returns the data saved in the database.
     * @param {RelationCreateManyAndReturnArgs} args - Arguments to create many Relations.
     * @example
     * // Create many Relations
     * const relation = await prisma.relation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Relations and only return the `id`
     * const relationWithIdOnly = await prisma.relation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RelationCreateManyAndReturnArgs>(args?: SelectSubset<T, RelationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Relation.
     * @param {RelationDeleteArgs} args - Arguments to delete one Relation.
     * @example
     * // Delete one Relation
     * const Relation = await prisma.relation.delete({
     *   where: {
     *     // ... filter to delete one Relation
     *   }
     * })
     * 
     */
    delete<T extends RelationDeleteArgs>(args: SelectSubset<T, RelationDeleteArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Relation.
     * @param {RelationUpdateArgs} args - Arguments to update one Relation.
     * @example
     * // Update one Relation
     * const relation = await prisma.relation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RelationUpdateArgs>(args: SelectSubset<T, RelationUpdateArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Relations.
     * @param {RelationDeleteManyArgs} args - Arguments to filter Relations to delete.
     * @example
     * // Delete a few Relations
     * const { count } = await prisma.relation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RelationDeleteManyArgs>(args?: SelectSubset<T, RelationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RelationUpdateManyArgs>(args: SelectSubset<T, RelationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Relations and returns the data updated in the database.
     * @param {RelationUpdateManyAndReturnArgs} args - Arguments to update many Relations.
     * @example
     * // Update many Relations
     * const relation = await prisma.relation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Relations and only return the `id`
     * const relationWithIdOnly = await prisma.relation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RelationUpdateManyAndReturnArgs>(args: SelectSubset<T, RelationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Relation.
     * @param {RelationUpsertArgs} args - Arguments to update or create a Relation.
     * @example
     * // Update or create a Relation
     * const relation = await prisma.relation.upsert({
     *   create: {
     *     // ... data to create a Relation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Relation we want to update
     *   }
     * })
     */
    upsert<T extends RelationUpsertArgs>(args: SelectSubset<T, RelationUpsertArgs<ExtArgs>>): Prisma__RelationClient<$Result.GetResult<Prisma.$RelationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Relations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationCountArgs} args - Arguments to filter Relations to count.
     * @example
     * // Count the number of Relations
     * const count = await prisma.relation.count({
     *   where: {
     *     // ... the filter for the Relations we want to count
     *   }
     * })
    **/
    count<T extends RelationCountArgs>(
      args?: Subset<T, RelationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RelationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RelationAggregateArgs>(args: Subset<T, RelationAggregateArgs>): Prisma.PrismaPromise<GetRelationAggregateType<T>>

    /**
     * Group by Relation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RelationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RelationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RelationGroupByArgs['orderBy'] }
        : { orderBy?: RelationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RelationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRelationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Relation model
   */
  readonly fields: RelationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Relation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RelationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UsersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsersDefaultArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    road<T extends RoadDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoadDefaultArgs<ExtArgs>>): Prisma__RoadClient<$Result.GetResult<Prisma.$RoadPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Relation model
   */
  interface RelationFieldRefs {
    readonly id: FieldRef<"Relation", 'Int'>
    readonly userId: FieldRef<"Relation", 'Int'>
    readonly addressId: FieldRef<"Relation", 'Int'>
    readonly roadId: FieldRef<"Relation", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Relation findUnique
   */
  export type RelationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation findUniqueOrThrow
   */
  export type RelationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation findFirst
   */
  export type RelationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation findFirstOrThrow
   */
  export type RelationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relation to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Relations.
     */
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation findMany
   */
  export type RelationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter, which Relations to fetch.
     */
    where?: RelationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Relations to fetch.
     */
    orderBy?: RelationOrderByWithRelationInput | RelationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Relations.
     */
    cursor?: RelationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Relations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Relations.
     */
    skip?: number
    distinct?: RelationScalarFieldEnum | RelationScalarFieldEnum[]
  }

  /**
   * Relation create
   */
  export type RelationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to create a Relation.
     */
    data: XOR<RelationCreateInput, RelationUncheckedCreateInput>
  }

  /**
   * Relation createMany
   */
  export type RelationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Relation createManyAndReturn
   */
  export type RelationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * The data used to create many Relations.
     */
    data: RelationCreateManyInput | RelationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relation update
   */
  export type RelationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The data needed to update a Relation.
     */
    data: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
    /**
     * Choose, which Relation to update.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation updateMany
   */
  export type RelationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
  }

  /**
   * Relation updateManyAndReturn
   */
  export type RelationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * The data used to update Relations.
     */
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyInput>
    /**
     * Filter which Relations to update
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Relation upsert
   */
  export type RelationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * The filter to search for the Relation to update in case it exists.
     */
    where: RelationWhereUniqueInput
    /**
     * In case the Relation found by the `where` argument doesn't exist, create a new Relation with this data.
     */
    create: XOR<RelationCreateInput, RelationUncheckedCreateInput>
    /**
     * In case the Relation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RelationUpdateInput, RelationUncheckedUpdateInput>
  }

  /**
   * Relation delete
   */
  export type RelationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
    /**
     * Filter which Relation to delete.
     */
    where: RelationWhereUniqueInput
  }

  /**
   * Relation deleteMany
   */
  export type RelationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Relations to delete
     */
    where?: RelationWhereInput
    /**
     * Limit how many Relations to delete.
     */
    limit?: number
  }

  /**
   * Relation without action
   */
  export type RelationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Relation
     */
    select?: RelationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Relation
     */
    omit?: RelationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RelationInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    current_coins: 'current_coins',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RoadScalarFieldEnum: {
    id: 'id',
    days: 'days',
    attempt_coins: 'attempt_coins',
    created_at: 'created_at'
  };

  export type RoadScalarFieldEnum = (typeof RoadScalarFieldEnum)[keyof typeof RoadScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    name: 'name',
    category: 'category'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const RelationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    addressId: 'addressId',
    roadId: 'roadId'
  };

  export type RelationScalarFieldEnum = (typeof RelationScalarFieldEnum)[keyof typeof RelationScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Category'
   */
  export type EnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category'>
    


  /**
   * Reference to a field of type 'Category[]'
   */
  export type ListEnumCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Category[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: IntFilter<"Users"> | number
    name?: StringFilter<"Users"> | string
    email?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    current_coins?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    relations?: RelationListRelationFilter
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    current_coins?: SortOrder
    created_at?: SortOrder
    relations?: RelationOrderByRelationAggregateInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    password?: StringFilter<"Users"> | string
    current_coins?: IntFilter<"Users"> | number
    created_at?: DateTimeFilter<"Users"> | Date | string
    relations?: RelationListRelationFilter
  }, "id" | "email">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    current_coins?: SortOrder
    created_at?: SortOrder
    _count?: UsersCountOrderByAggregateInput
    _avg?: UsersAvgOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
    _sum?: UsersSumOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Users"> | number
    name?: StringWithAggregatesFilter<"Users"> | string
    email?: StringWithAggregatesFilter<"Users"> | string
    password?: StringWithAggregatesFilter<"Users"> | string
    current_coins?: IntWithAggregatesFilter<"Users"> | number
    created_at?: DateTimeWithAggregatesFilter<"Users"> | Date | string
  }

  export type RoadWhereInput = {
    AND?: RoadWhereInput | RoadWhereInput[]
    OR?: RoadWhereInput[]
    NOT?: RoadWhereInput | RoadWhereInput[]
    id?: IntFilter<"Road"> | number
    days?: IntFilter<"Road"> | number
    attempt_coins?: IntFilter<"Road"> | number
    created_at?: DateTimeFilter<"Road"> | Date | string
    relations?: RelationListRelationFilter
  }

  export type RoadOrderByWithRelationInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
    created_at?: SortOrder
    relations?: RelationOrderByRelationAggregateInput
  }

  export type RoadWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RoadWhereInput | RoadWhereInput[]
    OR?: RoadWhereInput[]
    NOT?: RoadWhereInput | RoadWhereInput[]
    days?: IntFilter<"Road"> | number
    attempt_coins?: IntFilter<"Road"> | number
    created_at?: DateTimeFilter<"Road"> | Date | string
    relations?: RelationListRelationFilter
  }, "id">

  export type RoadOrderByWithAggregationInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
    created_at?: SortOrder
    _count?: RoadCountOrderByAggregateInput
    _avg?: RoadAvgOrderByAggregateInput
    _max?: RoadMaxOrderByAggregateInput
    _min?: RoadMinOrderByAggregateInput
    _sum?: RoadSumOrderByAggregateInput
  }

  export type RoadScalarWhereWithAggregatesInput = {
    AND?: RoadScalarWhereWithAggregatesInput | RoadScalarWhereWithAggregatesInput[]
    OR?: RoadScalarWhereWithAggregatesInput[]
    NOT?: RoadScalarWhereWithAggregatesInput | RoadScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Road"> | number
    days?: IntWithAggregatesFilter<"Road"> | number
    attempt_coins?: IntWithAggregatesFilter<"Road"> | number
    created_at?: DateTimeWithAggregatesFilter<"Road"> | Date | string
  }

  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    name?: StringFilter<"Address"> | string
    category?: EnumCategoryFilter<"Address"> | $Enums.Category
    relations?: RelationListRelationFilter
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    relations?: RelationOrderByRelationAggregateInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    name?: StringFilter<"Address"> | string
    category?: EnumCategoryFilter<"Address"> | $Enums.Category
    relations?: RelationListRelationFilter
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    name?: StringWithAggregatesFilter<"Address"> | string
    category?: EnumCategoryWithAggregatesFilter<"Address"> | $Enums.Category
  }

  export type RelationWhereInput = {
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    id?: IntFilter<"Relation"> | number
    userId?: IntFilter<"Relation"> | number
    addressId?: IntFilter<"Relation"> | number
    roadId?: IntFilter<"Relation"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    road?: XOR<RoadScalarRelationFilter, RoadWhereInput>
  }

  export type RelationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
    user?: UsersOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    road?: RoadOrderByWithRelationInput
  }

  export type RelationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_addressId_roadId?: RelationUserIdAddressIdRoadIdCompoundUniqueInput
    AND?: RelationWhereInput | RelationWhereInput[]
    OR?: RelationWhereInput[]
    NOT?: RelationWhereInput | RelationWhereInput[]
    userId?: IntFilter<"Relation"> | number
    addressId?: IntFilter<"Relation"> | number
    roadId?: IntFilter<"Relation"> | number
    user?: XOR<UsersScalarRelationFilter, UsersWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    road?: XOR<RoadScalarRelationFilter, RoadWhereInput>
  }, "id" | "userId_addressId_roadId">

  export type RelationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
    _count?: RelationCountOrderByAggregateInput
    _avg?: RelationAvgOrderByAggregateInput
    _max?: RelationMaxOrderByAggregateInput
    _min?: RelationMinOrderByAggregateInput
    _sum?: RelationSumOrderByAggregateInput
  }

  export type RelationScalarWhereWithAggregatesInput = {
    AND?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    OR?: RelationScalarWhereWithAggregatesInput[]
    NOT?: RelationScalarWhereWithAggregatesInput | RelationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Relation"> | number
    userId?: IntWithAggregatesFilter<"Relation"> | number
    addressId?: IntWithAggregatesFilter<"Relation"> | number
    roadId?: IntWithAggregatesFilter<"Relation"> | number
  }

  export type UsersCreateInput = {
    name: string
    email: string
    password: string
    current_coins?: number
    created_at?: Date | string
    relations?: RelationCreateNestedManyWithoutUserInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    current_coins?: number
    created_at?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutUserInput
  }

  export type UsersUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    current_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUpdateManyWithoutUserNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    current_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UsersCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    current_coins?: number
    created_at?: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    current_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    current_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadCreateInput = {
    days: number
    attempt_coins: number
    created_at?: Date | string
    relations?: RelationCreateNestedManyWithoutRoadInput
  }

  export type RoadUncheckedCreateInput = {
    id?: number
    days: number
    attempt_coins: number
    created_at?: Date | string
    relations?: RelationUncheckedCreateNestedManyWithoutRoadInput
  }

  export type RoadUpdateInput = {
    days?: IntFieldUpdateOperationsInput | number
    attempt_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUpdateManyWithoutRoadNestedInput
  }

  export type RoadUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    attempt_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    relations?: RelationUncheckedUpdateManyWithoutRoadNestedInput
  }

  export type RoadCreateManyInput = {
    id?: number
    days: number
    attempt_coins: number
    created_at?: Date | string
  }

  export type RoadUpdateManyMutationInput = {
    days?: IntFieldUpdateOperationsInput | number
    attempt_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    attempt_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressCreateInput = {
    name: string
    category: $Enums.Category
    relations?: RelationCreateNestedManyWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    name: string
    category: $Enums.Category
    relations?: RelationUncheckedCreateNestedManyWithoutAddressInput
  }

  export type AddressUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    relations?: RelationUpdateManyWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
    relations?: RelationUncheckedUpdateManyWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    name: string
    category: $Enums.Category
  }

  export type AddressUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type RelationCreateInput = {
    user: UsersCreateNestedOneWithoutRelationsInput
    address: AddressCreateNestedOneWithoutRelationsInput
    road: RoadCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateInput = {
    id?: number
    userId: number
    addressId: number
    roadId: number
  }

  export type RelationUpdateInput = {
    user?: UsersUpdateOneRequiredWithoutRelationsNestedInput
    address?: AddressUpdateOneRequiredWithoutRelationsNestedInput
    road?: RoadUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type RelationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    roadId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationCreateManyInput = {
    id?: number
    userId: number
    addressId: number
    roadId: number
  }

  export type RelationUpdateManyMutationInput = {

  }

  export type RelationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    roadId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RelationListRelationFilter = {
    every?: RelationWhereInput
    some?: RelationWhereInput
    none?: RelationWhereInput
  }

  export type RelationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    current_coins?: SortOrder
    created_at?: SortOrder
  }

  export type UsersAvgOrderByAggregateInput = {
    id?: SortOrder
    current_coins?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    current_coins?: SortOrder
    created_at?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    current_coins?: SortOrder
    created_at?: SortOrder
  }

  export type UsersSumOrderByAggregateInput = {
    id?: SortOrder
    current_coins?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RoadCountOrderByAggregateInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
    created_at?: SortOrder
  }

  export type RoadAvgOrderByAggregateInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
  }

  export type RoadMaxOrderByAggregateInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
    created_at?: SortOrder
  }

  export type RoadMinOrderByAggregateInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
    created_at?: SortOrder
  }

  export type RoadSumOrderByAggregateInput = {
    id?: SortOrder
    days?: SortOrder
    attempt_coins?: SortOrder
  }

  export type EnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    category?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type UsersScalarRelationFilter = {
    is?: UsersWhereInput
    isNot?: UsersWhereInput
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type RoadScalarRelationFilter = {
    is?: RoadWhereInput
    isNot?: RoadWhereInput
  }

  export type RelationUserIdAddressIdRoadIdCompoundUniqueInput = {
    userId: number
    addressId: number
    roadId: number
  }

  export type RelationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
  }

  export type RelationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
  }

  export type RelationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
  }

  export type RelationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
  }

  export type RelationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    addressId?: SortOrder
    roadId?: SortOrder
  }

  export type RelationCreateNestedManyWithoutUserInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RelationUpdateManyWithoutUserNestedInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutUserInput | RelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutUserInput | RelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutUserInput | RelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput> | RelationCreateWithoutUserInput[] | RelationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutUserInput | RelationCreateOrConnectWithoutUserInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutUserInput | RelationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RelationCreateManyUserInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutUserInput | RelationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutUserInput | RelationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationCreateNestedManyWithoutRoadInput = {
    create?: XOR<RelationCreateWithoutRoadInput, RelationUncheckedCreateWithoutRoadInput> | RelationCreateWithoutRoadInput[] | RelationUncheckedCreateWithoutRoadInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRoadInput | RelationCreateOrConnectWithoutRoadInput[]
    createMany?: RelationCreateManyRoadInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutRoadInput = {
    create?: XOR<RelationCreateWithoutRoadInput, RelationUncheckedCreateWithoutRoadInput> | RelationCreateWithoutRoadInput[] | RelationUncheckedCreateWithoutRoadInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRoadInput | RelationCreateOrConnectWithoutRoadInput[]
    createMany?: RelationCreateManyRoadInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationUpdateManyWithoutRoadNestedInput = {
    create?: XOR<RelationCreateWithoutRoadInput, RelationUncheckedCreateWithoutRoadInput> | RelationCreateWithoutRoadInput[] | RelationUncheckedCreateWithoutRoadInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRoadInput | RelationCreateOrConnectWithoutRoadInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutRoadInput | RelationUpsertWithWhereUniqueWithoutRoadInput[]
    createMany?: RelationCreateManyRoadInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutRoadInput | RelationUpdateWithWhereUniqueWithoutRoadInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutRoadInput | RelationUpdateManyWithWhereWithoutRoadInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutRoadNestedInput = {
    create?: XOR<RelationCreateWithoutRoadInput, RelationUncheckedCreateWithoutRoadInput> | RelationCreateWithoutRoadInput[] | RelationUncheckedCreateWithoutRoadInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutRoadInput | RelationCreateOrConnectWithoutRoadInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutRoadInput | RelationUpsertWithWhereUniqueWithoutRoadInput[]
    createMany?: RelationCreateManyRoadInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutRoadInput | RelationUpdateWithWhereUniqueWithoutRoadInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutRoadInput | RelationUpdateManyWithWhereWithoutRoadInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationCreateNestedManyWithoutAddressInput = {
    create?: XOR<RelationCreateWithoutAddressInput, RelationUncheckedCreateWithoutAddressInput> | RelationCreateWithoutAddressInput[] | RelationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutAddressInput | RelationCreateOrConnectWithoutAddressInput[]
    createMany?: RelationCreateManyAddressInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type RelationUncheckedCreateNestedManyWithoutAddressInput = {
    create?: XOR<RelationCreateWithoutAddressInput, RelationUncheckedCreateWithoutAddressInput> | RelationCreateWithoutAddressInput[] | RelationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutAddressInput | RelationCreateOrConnectWithoutAddressInput[]
    createMany?: RelationCreateManyAddressInputEnvelope
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
  }

  export type EnumCategoryFieldUpdateOperationsInput = {
    set?: $Enums.Category
  }

  export type RelationUpdateManyWithoutAddressNestedInput = {
    create?: XOR<RelationCreateWithoutAddressInput, RelationUncheckedCreateWithoutAddressInput> | RelationCreateWithoutAddressInput[] | RelationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutAddressInput | RelationCreateOrConnectWithoutAddressInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutAddressInput | RelationUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: RelationCreateManyAddressInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutAddressInput | RelationUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutAddressInput | RelationUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type RelationUncheckedUpdateManyWithoutAddressNestedInput = {
    create?: XOR<RelationCreateWithoutAddressInput, RelationUncheckedCreateWithoutAddressInput> | RelationCreateWithoutAddressInput[] | RelationUncheckedCreateWithoutAddressInput[]
    connectOrCreate?: RelationCreateOrConnectWithoutAddressInput | RelationCreateOrConnectWithoutAddressInput[]
    upsert?: RelationUpsertWithWhereUniqueWithoutAddressInput | RelationUpsertWithWhereUniqueWithoutAddressInput[]
    createMany?: RelationCreateManyAddressInputEnvelope
    set?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    disconnect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    delete?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    connect?: RelationWhereUniqueInput | RelationWhereUniqueInput[]
    update?: RelationUpdateWithWhereUniqueWithoutAddressInput | RelationUpdateWithWhereUniqueWithoutAddressInput[]
    updateMany?: RelationUpdateManyWithWhereWithoutAddressInput | RelationUpdateManyWithWhereWithoutAddressInput[]
    deleteMany?: RelationScalarWhereInput | RelationScalarWhereInput[]
  }

  export type UsersCreateNestedOneWithoutRelationsInput = {
    create?: XOR<UsersCreateWithoutRelationsInput, UsersUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRelationsInput
    connect?: UsersWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutRelationsInput = {
    create?: XOR<AddressCreateWithoutRelationsInput, AddressUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRelationsInput
    connect?: AddressWhereUniqueInput
  }

  export type RoadCreateNestedOneWithoutRelationsInput = {
    create?: XOR<RoadCreateWithoutRelationsInput, RoadUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: RoadCreateOrConnectWithoutRelationsInput
    connect?: RoadWhereUniqueInput
  }

  export type UsersUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<UsersCreateWithoutRelationsInput, UsersUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: UsersCreateOrConnectWithoutRelationsInput
    upsert?: UsersUpsertWithoutRelationsInput
    connect?: UsersWhereUniqueInput
    update?: XOR<XOR<UsersUpdateToOneWithWhereWithoutRelationsInput, UsersUpdateWithoutRelationsInput>, UsersUncheckedUpdateWithoutRelationsInput>
  }

  export type AddressUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<AddressCreateWithoutRelationsInput, AddressUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: AddressCreateOrConnectWithoutRelationsInput
    upsert?: AddressUpsertWithoutRelationsInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutRelationsInput, AddressUpdateWithoutRelationsInput>, AddressUncheckedUpdateWithoutRelationsInput>
  }

  export type RoadUpdateOneRequiredWithoutRelationsNestedInput = {
    create?: XOR<RoadCreateWithoutRelationsInput, RoadUncheckedCreateWithoutRelationsInput>
    connectOrCreate?: RoadCreateOrConnectWithoutRelationsInput
    upsert?: RoadUpsertWithoutRelationsInput
    connect?: RoadWhereUniqueInput
    update?: XOR<XOR<RoadUpdateToOneWithWhereWithoutRelationsInput, RoadUpdateWithoutRelationsInput>, RoadUncheckedUpdateWithoutRelationsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryFilter<$PrismaModel> | $Enums.Category
  }

  export type NestedEnumCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Category | EnumCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.Category[] | ListEnumCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumCategoryWithAggregatesFilter<$PrismaModel> | $Enums.Category
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCategoryFilter<$PrismaModel>
    _max?: NestedEnumCategoryFilter<$PrismaModel>
  }

  export type RelationCreateWithoutUserInput = {
    address: AddressCreateNestedOneWithoutRelationsInput
    road: RoadCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateWithoutUserInput = {
    id?: number
    addressId: number
    roadId: number
  }

  export type RelationCreateOrConnectWithoutUserInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput>
  }

  export type RelationCreateManyUserInputEnvelope = {
    data: RelationCreateManyUserInput | RelationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RelationUpsertWithWhereUniqueWithoutUserInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutUserInput, RelationUncheckedUpdateWithoutUserInput>
    create: XOR<RelationCreateWithoutUserInput, RelationUncheckedCreateWithoutUserInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutUserInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutUserInput, RelationUncheckedUpdateWithoutUserInput>
  }

  export type RelationUpdateManyWithWhereWithoutUserInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutUserInput>
  }

  export type RelationScalarWhereInput = {
    AND?: RelationScalarWhereInput | RelationScalarWhereInput[]
    OR?: RelationScalarWhereInput[]
    NOT?: RelationScalarWhereInput | RelationScalarWhereInput[]
    id?: IntFilter<"Relation"> | number
    userId?: IntFilter<"Relation"> | number
    addressId?: IntFilter<"Relation"> | number
    roadId?: IntFilter<"Relation"> | number
  }

  export type RelationCreateWithoutRoadInput = {
    user: UsersCreateNestedOneWithoutRelationsInput
    address: AddressCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateWithoutRoadInput = {
    id?: number
    userId: number
    addressId: number
  }

  export type RelationCreateOrConnectWithoutRoadInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutRoadInput, RelationUncheckedCreateWithoutRoadInput>
  }

  export type RelationCreateManyRoadInputEnvelope = {
    data: RelationCreateManyRoadInput | RelationCreateManyRoadInput[]
    skipDuplicates?: boolean
  }

  export type RelationUpsertWithWhereUniqueWithoutRoadInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutRoadInput, RelationUncheckedUpdateWithoutRoadInput>
    create: XOR<RelationCreateWithoutRoadInput, RelationUncheckedCreateWithoutRoadInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutRoadInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutRoadInput, RelationUncheckedUpdateWithoutRoadInput>
  }

  export type RelationUpdateManyWithWhereWithoutRoadInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutRoadInput>
  }

  export type RelationCreateWithoutAddressInput = {
    user: UsersCreateNestedOneWithoutRelationsInput
    road: RoadCreateNestedOneWithoutRelationsInput
  }

  export type RelationUncheckedCreateWithoutAddressInput = {
    id?: number
    userId: number
    roadId: number
  }

  export type RelationCreateOrConnectWithoutAddressInput = {
    where: RelationWhereUniqueInput
    create: XOR<RelationCreateWithoutAddressInput, RelationUncheckedCreateWithoutAddressInput>
  }

  export type RelationCreateManyAddressInputEnvelope = {
    data: RelationCreateManyAddressInput | RelationCreateManyAddressInput[]
    skipDuplicates?: boolean
  }

  export type RelationUpsertWithWhereUniqueWithoutAddressInput = {
    where: RelationWhereUniqueInput
    update: XOR<RelationUpdateWithoutAddressInput, RelationUncheckedUpdateWithoutAddressInput>
    create: XOR<RelationCreateWithoutAddressInput, RelationUncheckedCreateWithoutAddressInput>
  }

  export type RelationUpdateWithWhereUniqueWithoutAddressInput = {
    where: RelationWhereUniqueInput
    data: XOR<RelationUpdateWithoutAddressInput, RelationUncheckedUpdateWithoutAddressInput>
  }

  export type RelationUpdateManyWithWhereWithoutAddressInput = {
    where: RelationScalarWhereInput
    data: XOR<RelationUpdateManyMutationInput, RelationUncheckedUpdateManyWithoutAddressInput>
  }

  export type UsersCreateWithoutRelationsInput = {
    name: string
    email: string
    password: string
    current_coins?: number
    created_at?: Date | string
  }

  export type UsersUncheckedCreateWithoutRelationsInput = {
    id?: number
    name: string
    email: string
    password: string
    current_coins?: number
    created_at?: Date | string
  }

  export type UsersCreateOrConnectWithoutRelationsInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRelationsInput, UsersUncheckedCreateWithoutRelationsInput>
  }

  export type AddressCreateWithoutRelationsInput = {
    name: string
    category: $Enums.Category
  }

  export type AddressUncheckedCreateWithoutRelationsInput = {
    id?: number
    name: string
    category: $Enums.Category
  }

  export type AddressCreateOrConnectWithoutRelationsInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutRelationsInput, AddressUncheckedCreateWithoutRelationsInput>
  }

  export type RoadCreateWithoutRelationsInput = {
    days: number
    attempt_coins: number
    created_at?: Date | string
  }

  export type RoadUncheckedCreateWithoutRelationsInput = {
    id?: number
    days: number
    attempt_coins: number
    created_at?: Date | string
  }

  export type RoadCreateOrConnectWithoutRelationsInput = {
    where: RoadWhereUniqueInput
    create: XOR<RoadCreateWithoutRelationsInput, RoadUncheckedCreateWithoutRelationsInput>
  }

  export type UsersUpsertWithoutRelationsInput = {
    update: XOR<UsersUpdateWithoutRelationsInput, UsersUncheckedUpdateWithoutRelationsInput>
    create: XOR<UsersCreateWithoutRelationsInput, UsersUncheckedCreateWithoutRelationsInput>
    where?: UsersWhereInput
  }

  export type UsersUpdateToOneWithWhereWithoutRelationsInput = {
    where?: UsersWhereInput
    data: XOR<UsersUpdateWithoutRelationsInput, UsersUncheckedUpdateWithoutRelationsInput>
  }

  export type UsersUpdateWithoutRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    current_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateWithoutRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    current_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AddressUpsertWithoutRelationsInput = {
    update: XOR<AddressUpdateWithoutRelationsInput, AddressUncheckedUpdateWithoutRelationsInput>
    create: XOR<AddressCreateWithoutRelationsInput, AddressUncheckedCreateWithoutRelationsInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutRelationsInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutRelationsInput, AddressUncheckedUpdateWithoutRelationsInput>
  }

  export type AddressUpdateWithoutRelationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type AddressUncheckedUpdateWithoutRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    category?: EnumCategoryFieldUpdateOperationsInput | $Enums.Category
  }

  export type RoadUpsertWithoutRelationsInput = {
    update: XOR<RoadUpdateWithoutRelationsInput, RoadUncheckedUpdateWithoutRelationsInput>
    create: XOR<RoadCreateWithoutRelationsInput, RoadUncheckedCreateWithoutRelationsInput>
    where?: RoadWhereInput
  }

  export type RoadUpdateToOneWithWhereWithoutRelationsInput = {
    where?: RoadWhereInput
    data: XOR<RoadUpdateWithoutRelationsInput, RoadUncheckedUpdateWithoutRelationsInput>
  }

  export type RoadUpdateWithoutRelationsInput = {
    days?: IntFieldUpdateOperationsInput | number
    attempt_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoadUncheckedUpdateWithoutRelationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    days?: IntFieldUpdateOperationsInput | number
    attempt_coins?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RelationCreateManyUserInput = {
    id?: number
    addressId: number
    roadId: number
  }

  export type RelationUpdateWithoutUserInput = {
    address?: AddressUpdateOneRequiredWithoutRelationsNestedInput
    road?: RoadUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type RelationUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    roadId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
    roadId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationCreateManyRoadInput = {
    id?: number
    userId: number
    addressId: number
  }

  export type RelationUpdateWithoutRoadInput = {
    user?: UsersUpdateOneRequiredWithoutRelationsNestedInput
    address?: AddressUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type RelationUncheckedUpdateWithoutRoadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationUncheckedUpdateManyWithoutRoadInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    addressId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationCreateManyAddressInput = {
    id?: number
    userId: number
    roadId: number
  }

  export type RelationUpdateWithoutAddressInput = {
    user?: UsersUpdateOneRequiredWithoutRelationsNestedInput
    road?: RoadUpdateOneRequiredWithoutRelationsNestedInput
  }

  export type RelationUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roadId?: IntFieldUpdateOperationsInput | number
  }

  export type RelationUncheckedUpdateManyWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roadId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}