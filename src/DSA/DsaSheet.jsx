import React, { useState, useEffect } from "react";
import { Star, Search } from "lucide-react";

const topics = [
	{
		name: "Arrays & Hashing",
		problemCount: 92,
		problems: [
			{
				title: "Two Sum",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/two-sum/",
			},
			{
				title: "Median of Two Sorted Arrays",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/median-of-two-sorted-arrays/",
			},
			{
				title: "Container With Most Water",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/container-with-most-water/",
			},
			{
				title: "3Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum/",
			},
			{
				title: "3Sum Closest",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum-closest/",
			},
			{
				title: "4Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/4sum/",
			},
			{
				title: "Remove Duplicates from Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
			},
			{
				title: "Remove Element",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/remove-element/",
			},
			{
				title: "Next Permutation",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/next-permutation/",
			},
			{
				title: "Search in Rotated Sorted Array",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array/",
			},
			{
				title: "Find First and Last Position of Element in Sorted Array",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/",
			},
			{
				title: "Search Insert Position",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-insert-position/",
			},
			{
				title: "Valid Sudoku",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/valid-sudoku/",
			},
			{
				title: "Sudoku Solver",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sudoku-solver/",
			},
			{
				title: "Combination Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/combination-sum/",
			},
			{
				title: "Combination Sum II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/combination-sum-ii/",
			},
			{
				title: "First Missing Positive",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/first-missing-positive/",
			},
			{
				title: "Trapping Rain Water",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/trapping-rain-water/",
			},
			{
				title: "Jump Game II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/jump-game-ii/",
			},
			{
				title: "Permutations",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/permutations/",
			},
			{
				title: "Permutations II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/permutations-ii/",
			},
			{
				title: "Rotate Image",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-image/",
			},
			{
				title: "Group Anagrams",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/group-anagrams/",
			},
			{
				title: "N-Queens",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/n-queens/",
			},
			{
				title: "Maximum Subarray",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximum-subarray/",
			},
			{
				title: "Spiral Matrix",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/spiral-matrix/",
			},
			{
				title: "Jump Game",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/jump-game/",
			},
			{
				title: "Merge Intervals",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-intervals/",
			},
			{
				title: "Insert Interval",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/insert-interval/",
			},
			{
				title: "Spiral Matrix II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/spiral-matrix-ii/",
			},
			{
				title: "Unique Paths II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/unique-paths-ii/",
			},
			{
				title: "Minimum Path Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/minimum-path-sum/",
			},
			{
				title: "Plus One",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/plus-one/",
			},
			{
				title: "Text Justification",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/text-justification/",
			},
			{
				title: "Set Matrix Zeroes",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/set-matrix-zeroes/",
			},
			{
				title: "Search a 2D Matrix",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/search-a-2d-matrix/",
			},
			{
				title: "Sort Colors",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sort-colors/",
			},
			{
				title: "Subsets",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/subsets/",
			},
			{
				title: "Word Search",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/word-search/",
			},
			{
				title: "Remove Duplicates from Sorted Array II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
			},
			{
				title: "Search in Rotated Sorted Array II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array-ii/",
			},
			{
				title: "Largest Rectangle in Histogram",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/largest-rectangle-in-histogram/",
			},
			{
				title: "Maximal Rectangle",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximal-rectangle/",
			},
			{
				title: "Merge Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-sorted-array/",
			},
			{
				title: "Subsets II",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/subsets-ii/",
			},
			{
				title: "Construct Binary Tree from Preorder and Inorder Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/",
			},
			{
				title: "Construct Binary Tree from Inorder and Postorder Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/",
			},
			{
				title: "Binary Tree Level Order Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-level-order-traversal/",
			},
			{
				title: "Populating Next Right Pointers in Each Node",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/populating-next-right-pointers-in-each-node/",
			},
			{
				title: "Binary Tree Right Side View",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-right-side-view/",
			},
			{
				title: "Binary Tree Maximum Path Sum",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-maximum-path-sum/",
			},
			{
				title: "Symmetric Tree",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/symmetric-tree/",
			},
			{
				title: "Construct Binary Search Tree from Preorder Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
			},
			{
				title: "Delete Node in a BST",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/delete-node-in-a-bst/",
			},
			{
				title: "Lowest Common Ancestor of a Binary Tree",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/",
			},
			{
				title: "Closest Binary Search Tree Value",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/closest-binary-search-tree-value/",
			},
			{
				title: "Verify Preorder Serialization of a Binary Tree",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/",
			},
			{
				title: "Find Pivot Index",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-pivot-index/description/",
			},
		],
	},
	{
		name: "Two Pointers",
		problemCount: 29,
		problems: [
			{
				title: "Longest Palindromic Substring",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-palindromic-substring/",
			},
			{
				title: "Container With Most Water",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/container-with-most-water/",
			},
			{
				title: "3Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum/",
			},
			{
				title: "3Sum Closest",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum-closest/",
			},
			{
				title: "4Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/4sum/",
			},
			{
				title: "Remove Nth Node From End of List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-nth-node-from-end-of-list/",
			},
			{
				title: "Remove Duplicates from Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array/",
			},
			{
				title: "Remove Element",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/remove-element/",
			},
			{
				title: "Find the Index of the First Occurrence in a String",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/",
			},
			{
				title: "Next Permutation",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/next-permutation/",
			},
			{
				title: "Trapping Rain Water",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/trapping-rain-water/",
			},
			{
				title: "Rotate List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-list/",
			},
			{
				title: "Sort Colors",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sort-colors/",
			},
			{
				title: "Remove Duplicates from Sorted Array II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/",
			},
			{
				title: "Remove Duplicates from Sorted List II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/",
			},
			{
				title: "Partition List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/partition-list/",
			},
			{
				title: "Merge Sorted Array",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-sorted-array/",
			},
			{
				title: "Valid Palindrome",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/valid-palindrome/",
			},
			{
				title: "Linked List Cycle",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/linked-list-cycle/",
			},
			{
				title: "Linked List Cycle II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/linked-list-cycle-ii/",
			},
			{
				title: "Reorder List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/reorder-list/",
			},
			{
				title: "Sort List",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/sort-list/",
			},
			{
				title: "Reverse Words in a String",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/reverse-words-in-a-string/",
			},
			{
				title: "Intersection of Two Linked Lists",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/intersection-of-two-linked-lists/",
			},
			{
				title: "One Edit Distance",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/one-edit-distance/",
			},
			{
				title: "Compare Version Numbers",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/compare-version-numbers/",
			},
			{
				title: "Two Sum II - Input Array Is Sorted",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/",
			},
			{
				title: "Two Sum III - Data structure design",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/two-sum-iii-data-structure-design/",
			},
			{
				title: "Reverse Words in a String II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/reverse-words-in-a-string-ii/",
			},
			{
				title: "Rotate Array",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-array/",
			},
			{
				title: "Happy Number",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/happy-number/",
			},
			{
				title: "Palindrome Linked List",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/palindrome-linked-list/",
			},
			{
				title: "Shortest Word Distance II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/shortest-word-distance-ii/",
			},
			{
				title: "Strobogrammatic Number",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/strobogrammatic-number/",
			},
			{
				title: "Flatten 2D Vector",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/flatten-2d-vector/",
			},
			{
				title: "Meeting Rooms II",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/meeting-rooms-ii/",
			},
			{
				title: "3Sum Smaller",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/3sum-smaller/",
			},
			{
				title: "Closest Binary Search Tree Value II",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/closest-binary-search-tree-value-ii/",
			},
			{
				title: "Find the Celebrity",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/find-the-celebrity/",
			},
			{
				title: "Move Zeroes",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/move-zeroes/",
			},
			{
				title: "Find the Duplicate Number",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-the-duplicate-number/",
			},
			{
				title: "Find Median from Data Stream",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-median-from-data-stream/",
			},
			{
				title: "Create Maximum Number",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/create-maximum-number/",
			},
			{
				title: "Reverse String",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/reverse-string/",
			},
			{
				title: "Reverse Vowels of a String",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/reverse-vowels-of-a-string/",
			},
			{
				title: "Merge Intervals",
				difficulty: "Med.",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-intervals/",
			},
			{
				title: "Minimum Size Subarray Sum",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/minimum-size-subarray-sum/",
			},
			{
				title: "Max Consecutive Ones",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/max-consecutive-ones/",
			},
			{
				title: "Longest Substring Without Repeating Characters",
				difficulty: "Med.",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-substring-without-repeating-characters/",
			},
		],
	},
	{
		name: "Sliding Window",
		problemCount: 22,
		problems: [
			{
				title: "Best Time to Buy and Sell Stock",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
			},
			{
				title: "Longest Substring Without Repeating Characters",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-substring-without-repeating-characters/",
			},
			{
				title: "Minimum Window Substring",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/minimum-window-substring/",
			},
		],
	},
	{
		name: "Stack",
		problemCount: 23,
		problems: [
			{
				title: "Valid Parentheses",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/valid-parentheses/",
			},
			{
				title: "Min Stack",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/min-stack/",
			},
			{
				title: "Daily Temperatures",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/daily-temperatures/",
			},
		],
	},
	{
		name: "Binary Search",
		problemCount: 25,
		problems: [
			{
				title: "Binary Search",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/binary-search/",
			},
			{
				title: "Search in Rotated Sorted Array",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/search-in-rotated-sorted-array/",
			},
			{
				title: "Find Minimum in Rotated Sorted Array",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/",
			},
		],
	},
	{
		name: "Linked List",
		problemCount: 31,
		problems: [
			{
				title: "Reverse Linked List",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/reverse-linked-list/",
			},
			{
				title: "Merge Two Sorted Lists",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/merge-two-sorted-lists/",
			},
			{
				title: "LRU Cache",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/lru-cache/",
			},
		],
	},
	{
		name: "Trees",
		problemCount: 55,
		problems: [
			{
				title: "Invert Binary Tree",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/invert-binary-tree/",
			},
			{
				title: "Binary Tree Level Order Traversal",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/binary-tree-level-order-traversal/",
			},
			{
				title: "Serialize and Deserialize Binary Tree",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
			},
		],
	},
	{
		name: "Heap / Priority Queue",
		problemCount: 23,
		problems: [
			{
				title: "Kth Largest Element in a Stream",
				difficulty: "Easy",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/kth-largest-element-in-a-stream/",
			},
			{
				title: "Find Median from Data Stream",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/find-median-from-data-stream/",
			},
			{
				title: "Merge K Sorted Lists",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-k-sorted-lists/",
			},
		],
	},
	{
		name: "Backtracking",
		problemCount: 22,
		problems: [
			{
				title: "Subsets",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/subsets/",
			},
			{
				title: "Combination Sum",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/combination-sum/",
			},
			{
				title: "N-Queens",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/n-queens/",
			},
		],
	},
	{
		name: "Tries",
		problemCount: 4,
		problems: [
			{
				title: "Implement Trie (Prefix Tree)",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/implement-trie-prefix-tree/",
			},
			{
				title: "Design Add and Search Words Data Structure",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/design-add-and-search-words-data-structure/",
			},
			{
				title: "Word Search II",
				difficulty: "Hard",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/word-search-ii/",
			},
		],
	},
	{
		name: "Graphs",
		problemCount: 43,
		problems: [
			{
				title: "Number of Islands",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/number-of-islands/",
			},
			{
				title: "Clone Graph",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/clone-graph/",
			},
			{
				title: "Course Schedule",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/course-schedule/",
			},
		],
	},
	{
		name: "Advanced Graphs",
		problemCount: 13,
		problems: [
			{
				title: "Reconstruct Itinerary",
				difficulty: "Hard",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/reconstruct-itinerary/",
			},
			{
				title: "Min Cost to Connect All Points",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/min-cost-to-connect-all-points/",
			},
			{
				title: "Network Delay Time",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/network-delay-time/",
			},
		],
	},
	{
		name: "1-D Dynamic Programming",
		problemCount: 41,
		problems: [
			{
				title: "Climbing Stairs",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/climbing-stairs/",
			},
			{
				title: "House Robber",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/house-robber/",
			},
			{
				title: "Longest Increasing Subsequence",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-increasing-subsequence/",
			},
		],
	},
	{
		name: "2-D Dynamic Programming",
		problemCount: 41,
		problems: [
			{
				title: "Unique Paths",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/unique-paths/",
			},
			{
				title: "Longest Common Subsequence",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/longest-common-subsequence/",
			},
			{
				title: "Best Time to Buy and Sell Stock with Cooldown",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/",
			},
		],
	},
	{
		name: "Greedy",
		problemCount: 29,
		problems: [
			{
				title: "Maximum Subarray",
				difficulty: "Easy",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/maximum-subarray/",
			},
			{
				title: "Jump Game",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/jump-game/",
			},
			{
				title: "Gas Station",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/gas-station/",
			},
		],
	},
	{
		name: "Intervals",
		problemCount: 10,
		problems: [
			{
				title: "Merge Intervals",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/merge-intervals/",
			},
			{
				title: "Non-overlapping Intervals",
				difficulty: "Medium",
				hasSolution: true,
				leetcode:
					"https://leetcode.com/problems/non-overlapping-intervals/",
			},
			{
				title: "Insert Interval",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/insert-interval/",
			},
		],
	},
	{
		name: "Math & Geometry",
		problemCount: 32,
		problems: [
			{
				title: "Rotate Image",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/rotate-image/",
			},
			{
				title: "Spiral Matrix",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/spiral-matrix/",
			},
			{
				title: "Set Matrix Zeroes",
				difficulty: "Medium",
				hasSolution: true,
				leetcode: "https://leetcode.com/problems/set-matrix-zeroes/",
			},
		],
	},
];

const DSASheet = () => {
	const [completed, setCompleted] = useState({});
	const [expandedTopic, setExpandedTopic] = useState("Arrays & Hashing");
	const [searchTerm, setSearchTerm] = useState("");
	const [searchResults, setSearchResults] = useState([]);

	useEffect(() => {
		const savedProgress =
			JSON.parse(localStorage.getItem("completed")) || {};
		setCompleted(savedProgress);
	}, []);

	useEffect(() => {
		if (searchTerm) {
			const result = topics.flatMap((topic) =>
				topic.problems
					.filter((problem) =>
						problem.title
							.toLowerCase()
							.includes(searchTerm.toLowerCase())
					)
					.map((problem) => ({ ...problem, topicName: topic.name }))
			);
			setSearchResults(result);
		} else {
			setSearchResults([]);
		}
	}, [searchTerm]);

	const handleCheckbox = (topic, problem) => {
		const updatedCompleted = {
			...completed,
			[topic]: {
				...completed[topic],
				[problem]: !completed[topic]?.[problem],
			},
		};
		setCompleted(updatedCompleted);
		localStorage.setItem("completed", JSON.stringify(updatedCompleted));
	};

	return (
		<div className="w-full min-h-screen mx-auto p-6 bg-gray-900 text-white">
			<div className="mb-6">
				<div className="relative">
					<input
						type="text"
						placeholder="Search problems..."
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="w-full p-2 pl-10 rounded bg-gray-800 text-white"
					/>
					<Search
						className="absolute left-3 top-2.5 text-gray-400"
						size={20}
					/>
				</div>
			</div>

			{searchResults.length > 0 ? (
				<div className="mb-6">
					<h2 className="text-xl font-bold mb-4">Search Results</h2>
					<table className="w-full">
						<thead>
							<tr className="text-left">
								<th className="py-2">Status</th>
								<th>Star</th>
								<th>Problem</th>
								<th>Topic</th>
								<th>Difficulty</th>
								<th>Video Solution</th>
								<th>Code</th>
							</tr>
						</thead>
						<tbody>
							{searchResults.map((problem) => (
								<tr
									key={`${problem.topicName}-${problem.title}`}
									className="border-t border-gray-700"
								>
									<td className="py-2">
										<input
											type="checkbox"
											checked={
												completed[problem.topicName]?.[
													problem.title
												] || false
											}
											onChange={() =>
												handleCheckbox(
													problem.topicName,
													problem.title
												)
											}
											className="mr-2 cursor-pointer"
										/>
									</td>
									<td>
										<Star
											className="text-yellow-400"
											size={16}
										/>
									</td>
									<td className="cursor-pointer">
										{problem.title}
									</td>
									<td>{problem.topicName}</td>
									<td
										className={`${
											problem.difficulty === "Easy"
												? "text-green-500"
												: problem.difficulty ===
												  "Medium"
												? "text-yellow-500"
												: "text-red-500"
										}`}
									>
										{problem.difficulty}
									</td>
									<td className="cursor-pointer">
										{problem.hasSolution && "▶️"}
									</td>
									<td>
										<a
											href={problem.leetcode}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500"
										>
											View Code
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				topics.map((topic) => (
					<div key={topic.name} className="mb-4">
						<button
							className="w-full text-left p-4 bg-gray-800 rounded flex justify-between items-center"
							onClick={() =>
								setExpandedTopic(
									topic.name === expandedTopic
										? null
										: topic.name
								)
							}
						>
							<span>{topic.name}</span>
							<span>
								(
								{completed[topic.name]
									? Object.values(
											completed[topic.name]
									  ).filter(Boolean).length
									: 0}{" "}
								/ {topic.problemCount})
							</span>
						</button>
						{expandedTopic === topic.name && (
							<div className="mt-2">
								<table className="w-full">
									<thead>
										<tr className="text-left">
											<th className="py-2">Status</th>
											<th>Star</th>
											<th>Problem</th>
											<th>Difficulty</th>
											<th>Video Solution</th>
											<th>Code</th>
										</tr>
									</thead>
									<tbody>
										{topic.problems.map((problem) => (
											<tr
												key={problem.title}
												className="border-t border-gray-700"
											>
												<td className="py-2">
													<input
														type="checkbox"
														checked={
															completed[
																topic.name
															]?.[
																problem.title
															] || false
														}
														onChange={() =>
															handleCheckbox(
																topic.name,
																problem.title
															)
														}
														className="mr-2 cursor-pointer"
													/>
												</td>
												<td>
													<Star
														className="text-yellow-400"
														size={16}
													/>
												</td>
												<td className="cursor-pointer">
													{problem.title}
												</td>
												<td
													className={`${
														problem.difficulty ===
														"Easy"
															? "text-green-500"
															: problem.difficulty ===
															  "Medium"
															? "text-yellow-500"
															: "text-red-500"
													}`}
												>
													{problem.difficulty}
												</td>
												<td className="cursor-pointer">
													{problem.hasSolution &&
														"▶️"}
												</td>
												<td>
													<a
														href={problem.leetcode}
														target="_blank"
														rel="noopener noreferrer"
														className="text-blue-500"
													>
														View Code
													</a>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						)}
					</div>
				))
			)}
		</div>
	);
};

export default DSASheet;
