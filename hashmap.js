class HashMap
{
    constructor()
    {
        // Creates 10 buckets that store data
        this.buckets = [[], [], [], [], [], [], [], [], [], []];
    }

    // Hash function turns key into a bucket number
    hash(key)
    {
        // Length of the key % 10 keeping it between 0 and 9 to decide which bucket it is stored in
        return key.length % 10;
    }

    insert(key, value)
    {
        let bucketIndex;
        let selectedBucket;

        // Which bucket to be used based on key
        bucketIndex = this.hash(key);

        // Get that bucket from the buckets array
        selectedBucket = this.buckets[bucketIndex];

        // Add the key and value as a pair into that bucket
        selectedBucket.push([key, value]);
    }

    search(key)
    {
        let bucketIndex;
        let selectedBucket;
        let bucketPosition;

        // Find which bucket the key should be in
        bucketIndex = this.hash(key);

        // Get that bucket
        selectedBucket = this.buckets[bucketIndex];

        // Loop through each pair in the bucket
        for (bucketPosition = 0; bucketPosition < selectedBucket.length; bucketPosition++)
        {
            // 0 is key part of pair. 1 is value part of pair
            // Check key matches
            if (selectedBucket[bucketPosition][0] === key)
            {
                // If match found return value
                return selectedBucket[bucketPosition][1];
            }
        }
        // Return null if key is not found
        return null;
    }

    delete(key)
    {
        let bucketIndex;
        let selectedBucket;
        let bucketPosition;

        // Find bucket the key should be in
        bucketIndex = this.hash(key);

        // Get that bucket
        selectedBucket = this.buckets[bucketIndex];

        // Loop through bucket to find key
        for (bucketPosition = 0; bucketPosition < selectedBucket.length; bucketPosition++)
        {
            // Check if key matches
            if (selectedBucket[bucketPosition][0] === key)
            {
                // Remove pair from bucket. Splice removes item at position
                selectedBucket.splice(bucketPosition, 1);
                return;
            }
        }
    }
}

// Export so it can be used in other files
module.exports = HashMap;