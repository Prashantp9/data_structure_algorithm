import java.util.*;

public class LowerBond{
    public static void main(String[] args) {
      
      int[] array = {1,2,3,4,5,6,7,8,9};
      BinarySearch test = new BinarySearch(); 
      System.err.println("lower bound");
      System.out.println(test.lowwer_bound(array,3,array.length));
      System.err.println("upper bound");
      System.out.println(test.upper_bound(array,3,array.length));
  }
}

class BinarySearch{
  public int lowwer_bound(int[] arr,int target,int n){
    int low = 0;
    int high = n - 1;
    int ans = n;
 while(low <= high){
    int mid = (low + high) / 2;
      if(arr[mid] >= target){
        ans = mid;
        high = mid - 1;
      }
      else{
        low = mid + 1;
      }
    }
      return ans;
  }
  //find the upper bound in sorted array 
  public int upper_bound(int[] arr,int target,int n){
    int low = 0;
    int high = n - 1;
    int ans = n;
 while(low <= high){
    int mid = (low + high) / 2;
      if(arr[mid] > target){
        ans = mid;
        high = mid - 1;
      }
      else{
        low = mid + 1;
      }
    }
      return ans;
  }
}
