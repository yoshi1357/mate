<?php

namespace App\Http\Controllers;

use App\Models\TestProduct;
use Illuminate\Http\Request;
use App\Http\Requests\StoreTestProductRequest;

class ApiTestProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = TestProduct::all();
        return response()->json([
            'status' => true,
            'products' => $products
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreTestProductRequest $request)
    {
        $product = TestProduct::create($request->all());

        return response()->json([
            'status' => true,
            'message' => "Product Created successfully!",
            'product' => $product
        ], 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(TestProduct $testProduct)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(TestProduct $testProduct)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, TestProduct $testProduct)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(TestProduct $testProduct)
    {
        //
    }
}
