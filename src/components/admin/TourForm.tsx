import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { tourService, Tour } from "@/services/tourService";

interface TourFormProps {
    onSuccess?: () => void;
    tourId?: string | null;
    onCancel?: () => void;
}

const TourForm = ({ onSuccess, tourId, onCancel }: TourFormProps) => {
    const { toast } = useToast();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Partial<Tour>>({
        title: "",
        location: "",
        image: "",
        duration: "",
        groupSize: "",
        season: "",
        price: 0,
        discountPrice: 0,
        rating: 5,
        category: "adventure",
        category: "adventure",
        description: "",
        inclusions: "",
        exclusions: "",
        featured: false,

    });

    useEffect(() => {
        const loadTour = async () => {
            if (tourId) {
                const tour = await tourService.getTourById(tourId);
                if (tour) {
                    setFormData(tour);
                }
            }
        };
        loadTour();
    }, [tourId]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Basic validation
            if (!formData.title || !formData.price) {
                throw new Error("Title and Price are required");
            }

            await tourService.saveTour(formData as Tour);

            toast({
                title: tourId ? "Tour Updated" : "Tour Created",
                description: `Tour has been ${tourId ? 'updated' : 'created'} successfully`,
            });

            if (!tourId) {
                // Reset form
                setFormData({
                    title: "",
                    location: "",
                    image: "",
                    duration: "",
                    groupSize: "",
                    season: "",
                    price: 0,
                    discountPrice: 0,
                    rating: 5,
                    category: "adventure",
                    category: "adventure",
                    description: "",
                    inclusions: "",
                    exclusions: "",
                    featured: false,

                });
            }
            onSuccess?.();
        } catch (error: any) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const base64String = reader.result as string;
                setFormData(prev => ({ ...prev, image: base64String }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleInputChange = (field: keyof Tour, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>{tourId ? 'Edit Tour' : 'Add New Tour'}</CardTitle>
                    {onCancel && (
                        <Button variant="outline" onClick={onCancel}>Cancel</Button>
                    )}
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="title">Tour Title *</Label>
                                <Input
                                    id="title"
                                    value={formData.title}
                                    onChange={(e) => handleInputChange('title', e.target.value)}
                                    required
                                    placeholder="e.g., Safari Adventure"
                                />
                            </div>
                            <div>
                                <Label htmlFor="location">Location</Label>
                                <Input
                                    id="location"
                                    value={formData.location}
                                    onChange={(e) => handleInputChange('location', e.target.value)}
                                    placeholder="e.g., Serengeti, Tanzania"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="image">Image</Label>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            id="image-upload"
                                            type="file"
                                            accept="image/*"
                                            onChange={handleImageUpload}
                                            className="cursor-pointer"
                                        />
                                    </div>
                                    <div className="text-center text-sm text-gray-500">OR</div>
                                    <Input
                                        id="image-url"
                                        value={formData.image}
                                        onChange={(e) => handleInputChange('image', e.target.value)}
                                        placeholder="Enter Image URL"
                                    />
                                    {formData.image && (
                                        <div className="mt-2 relative h-40 w-full rounded-md overflow-hidden border">
                                            <img
                                                src={formData.image}
                                                alt="Preview"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="category">Category</Label>
                                <Select
                                    value={formData.category}
                                    onValueChange={(value) => handleInputChange('category', value)}
                                >
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="adventure">Adventure</SelectItem>
                                        <SelectItem value="safari">Safari</SelectItem>
                                        <SelectItem value="cultural">Cultural</SelectItem>
                                        <SelectItem value="holiday">Holiday</SelectItem>
                                        <SelectItem value="hiking">Hiking</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="duration">Duration</Label>
                                <Input
                                    id="duration"
                                    value={formData.duration}
                                    onChange={(e) => handleInputChange('duration', e.target.value)}
                                    placeholder="e.g., 3 Days"
                                />
                            </div>
                            <div>
                                <Label htmlFor="groupSize">Group Size</Label>
                                <Input
                                    id="groupSize"
                                    value={formData.groupSize}
                                    onChange={(e) => handleInputChange('groupSize', e.target.value)}
                                    placeholder="e.g., 2-8 people"
                                />
                            </div>
                            <div>
                                <Label htmlFor="season">Season</Label>
                                <Input
                                    id="season"
                                    value={formData.season}
                                    onChange={(e) => handleInputChange('season', e.target.value)}
                                    placeholder="e.g., Jun-Oct"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <Label htmlFor="price">Price (per person) *</Label>
                                <Input
                                    id="price"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={formData.price}
                                    onChange={(e) => handleInputChange('price', parseFloat(e.target.value))}
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="discountPrice">Discount Price (for large groups)</Label>
                                <Input
                                    id="discountPrice"
                                    type="number"
                                    min="0"
                                    step="0.01"
                                    value={formData.discountPrice}
                                    onChange={(e) => handleInputChange('discountPrice', parseFloat(e.target.value))}
                                />
                            </div>
                            <div>
                                <Label htmlFor="rating">Rating (1-5)</Label>
                                <Input
                                    id="rating"
                                    type="number"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    value={formData.rating}
                                    onChange={(e) => handleInputChange('rating', parseFloat(e.target.value))}
                                />
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="description">Description</Label>
                            <Textarea
                                id="description"
                                value={formData.description}
                                onChange={(e) => handleInputChange('description', e.target.value)}
                                placeholder="Detailed description of the tour..."
                                className="h-32"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <Label htmlFor="inclusions">Inclusions (one per line)</Label>
                                <Textarea
                                    id="inclusions"
                                    value={formData.inclusions || ""}
                                    onChange={(e) => handleInputChange('inclusions', e.target.value)}
                                    placeholder="• Private transportation&#10;• Lunch&#10;• Park fees"
                                    className="h-32 font-mono text-sm"
                                />
                            </div>
                            <div>
                                <Label htmlFor="exclusions">Exclusions (one per line)</Label>
                                <Textarea
                                    id="exclusions"
                                    value={formData.exclusions || ""}
                                    onChange={(e) => handleInputChange('exclusions', e.target.value)}
                                    placeholder="• Personal expenses&#10;• Tips&#10;• Flights"
                                    className="h-32 font-mono text-sm"
                                />
                            </div>
                        </div>


                        <div className="flex items-center space-x-2">
                            <Switch
                                id="featured"
                                checked={formData.featured}
                                onCheckedChange={(checked) => handleInputChange('featured', checked)}
                            />
                            <Label htmlFor="featured">Featured Tour (Shows in "Popular Tours" on Home)</Label>
                        </div>

                        <Button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary hover:bg-primary/90"
                        >
                            {loading ? "Saving..." : tourId ? "Update Tour" : "Create Tour"}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
};

export default TourForm;
