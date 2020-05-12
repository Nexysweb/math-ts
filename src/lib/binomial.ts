import * as U from './utils';


/**
 * @return binomial coefficient in recurrent mode
 * @param n 
 * @param k 
 * n>=1, k>=0
 */
export const coefficientR = (n: number, k: number):number => {
  if (n<1) {
    throw Error('n>=1')
  }

  if (k<0) {
    throw Error('k>=0')
  }

  if (k=== 0 || k === n) {
    return 1
  }

  if (k === 1) {
    return n;
  }

  if (k > n) {
    return -1
  }

  if (k > U.divWoRest(n, 2) + 1) {
    return coefficientR(n, k - U.divWoRest(n,2)-1)
  }

  return coefficientR(n-1, k-1)+coefficientR(n-1, k)
}

// same as above but not using recurrent computation
export const coefficient = (n: number, k: number):number => U.factorial(n)/(U.factorial(k)*U.factorial(n-k));

/*
class Pascal{
  import scala.collection.mutable.Map
  import scala.collection.mutable.ArrayBuffer
  val a: Map[(Long, Long), Long] = Map(
    ((1l,1l)  -> 1l),
    ((0l,2l)  -> 1l),
    ((1l,2l)  -> 1l),
    ((2l,2l)  -> 1l)
  )
  
  def coefficientS(n: Long, k: Long):Long = {
    a.get((n,k)).map{x =>
        x
    }.getOrElse{
      val b = coefficient(n, k)

      a += ((n,k) -> b)
      b
    }
  }

  def create(n: Long):List[(Long, List[Long])] = {
    List.tabulate(n.toInt+1)(_.toLong).map{k=>
      coefficientS(n, k)
    }

    if(n>1){
      create(n-1)
    }
    else{
      val r:ArrayBuffer[List[Long]] = ArrayBuffer()

      a.toList.groupBy(_._1._1).toList.map{a => 
        (a._1, a._2.sortBy(_._1._2).map{_._2})
      }
      .sortBy(_._1)
    }
  }
}*/