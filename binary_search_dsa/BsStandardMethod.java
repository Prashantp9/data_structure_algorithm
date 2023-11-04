public class BsStandardMethod {
    public static void main(String[] args){
       Method test = new Method();
       int[] arr = {1,2,3,4,5,6,7,8,9};
    //    System.err.println(test.standardMethod(arr, 10, arr.length));
       System.err.println(test.findElementWithRecursion(arr, 0, arr.length, 2));
    }
}

class Method{
    public int standardMethod(int[] arr,int target,int n){
       int low = 0 ;
       int high = n - 1;
       int mid ;
       int ans = -1;
       while(low <= high){
           mid = (low + high) / 2; 
          if(arr[mid] == target){
            ans = mid;
          }
          if(arr[mid] > target){
            high = mid - 1;
          }
          else{
            low = mid + 1;
          }
       }
       return ans;
    }


    // binary search with recursion
    public int findElementWithRecursion(int[] arr,int low,int high,int target){
       int mid = (low + high) / 2;
       if(low > high){
        return -1 ;
       }
       if(arr[mid] == target){
        return mid;
       }
       if(arr[mid] > target){
        return findElementWithRecursion(arr, low, mid - 1, target);
       }
       return findElementWithRecursion(arr, mid + 1, high, target);
    }
}