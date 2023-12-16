public class RoatedSortedArray{
   public static int searchElmrotatedArray(int[] arr,int target,int n){
        int low = 0; 
        int high = n - 1;
       while(low <= high){
        int mid =( low + high )/ 2 ;
        // first check whether the arr[mid] == target
        if(arr[mid] == target){
            return  mid;
        }
        // find the sorted part of an array
         if(arr[low] <= arr[mid]){
            // if it is then check whether it lies on right side of an array 
            if(arr[low] <= target && target <= arr[mid]){
                high = mid -1 ;
            }
            else{
                low = mid + 1;
                        }
         }
         else{
           if(arr[mid] <= target &&  target <= arr[high]){
               low = mid + 1 ;
           }
           else{
              high = mid - 1;
           }
         }
        }
        return -1;
    }
    public static void main(String[] args){
       int[] array = {7,8,1,2,3,4,5,6};
       System.out.println(searchElmrotatedArray(array, 8, array.length) );

        
    }
}